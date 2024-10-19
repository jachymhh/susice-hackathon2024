"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

// Chart configuration (for colors and layout)
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export function BarPotrebnaCastka() {
  const [customSize, setCustomSize] = useState(65.3); // Default size in m²
  const [adjustedData, setAdjustedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch property price data
        const priceResponse = await fetch(`http://localhost:3001/api/byt/2023`);
        const priceResult = await priceResponse.json();

        // Fetch median salary data
        const salaryResponse = await fetch(
          `http://localhost:3001/api/mzda/2023`
        );
        const salaryResult = await salaryResponse.json();

        const basePrices = priceResult.data.map((item) => ({
          kraj: item.kraj,
          avgPricePerM2: item.AVG, // Average price per m²
        }));

        // Create a map for median salaries
        const medianSalaries = {};
        salaryResult.data.forEach((item) => {
          medianSalaries[item.kraj] = item.med; // Map kraje to median salaries
        });

        // Adjust prices and calculate months needed based on the apartment size and median salary
        const updatedData = basePrices.map((data) => {
          const medianSalary = medianSalaries[data.kraj] || 1; // Use 1 to avoid division by 0
          const totalPrice = Math.round(data.avgPricePerM2 * customSize); // Total price for the apartment
          const monthsToSave = Math.round(totalPrice / medianSalary); // Calculate months needed to save

          return {
            kraj: data.kraj,
            monthsToSave, // Number of months needed to save
          };
        });

        setAdjustedData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [customSize]); // Add customSize to dependencies

  // Function to set custom apartment size
  const handleSizeChange = (event) => {
    const newSize = event.target.value; // Get new value as string
    if (newSize === "") {
      setCustomSize(""); // Allows clearing to empty string
    } else {
      const parsedSize = parseFloat(newSize);
      if (!isNaN(parsedSize)) {
        setCustomSize(parsedSize);
      }
    }
  };

  // Custom tooltip to display the region name and months needed
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border rounded shadow-lg p-2">
          <p className="font-semibold">{payload[0].payload.kraj}</p>
          <p className="text-muted-foreground">{`Měsíce potřebné: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  // Calculate max and min months
  const monthsNeeded = adjustedData.map((data) => data.monthsToSave);
  const maxMonths = Math.max(...monthsNeeded);
  const minMonths = Math.min(...monthsNeeded);
  const percentDifference = ((maxMonths - minMonths) / minMonths) * 100;

  return (
    <Card className="mx-auto w-3/4 my-8">
      <CardHeader>
        <CardTitle>
          Počet měsíců potřebných k úspoře na byt v jednotlivých krajích (2023)
        </CardTitle>
        <CardDescription>
          Zobrazené hodnoty představují počet měsíců potřebných k úspoře na byt
          podle zadané velikosti.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Input for custom apartment size */}
        <div className="mb-4">
          <label className="block text-sm mb-1">
            Zadejte velikost bytu (m²):
          </label>
          <input
            type="number"
            value={customSize}
            onChange={handleSizeChange}
            className="border rounded p-2 w-24"
            step="0.1"
          />
        </div>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={adjustedData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            {/* X Axis displaying region names */}
            <XAxis
              dataKey="kraj"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            {/* Y Axis displaying months needed */}
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            {/* Bar graph showing the number of months needed to save */}
            <Bar dataKey="monthsToSave" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Rozdíl mezi nejlevnějším a nejdražším bytem:
          <span className="font-bold">{percentDifference.toFixed(2)}%</span>
        </div>
        <div className="leading-none text-muted-foreground">
          Zobrazené ceny jsou pro velikost bytu {customSize} m².
        </div>
      </CardFooter>
    </Card>
  );
}
