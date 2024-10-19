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

export function BarPrumernaCena() {
  const [customSize, setCustomSize] = useState(65.3); // Default size in m²
  const [adjustedData, setAdjustedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/byt/2023`); // Adjust the year as needed
        const result = await response.json();
        const basePrices = result.data.map((item) => ({
          kraj: item.Kraj,
          avgPrice: item.AVG, // Average price per m²
        }));

        // Adjust prices based on the apartment size
        const updatedData = basePrices.map((data) => ({
          ...data,
          avgPrice: Math.round(data.avgPrice * 65.3), // Price for a 65.3 m² apartment
        }));

        setAdjustedData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Funkce pro nastavení vlastní velikosti bytu
  const handleSizeChange = (event) => {
    const newSize = event.target.value; // Získání nové hodnoty jako string
    if (newSize === "") {
      setCustomSize(""); // Umožňuje vymazání na prázdný string
    } else {
      const parsedSize = parseFloat(newSize);
      if (!isNaN(parsedSize)) {
        setCustomSize(parsedSize);
      }
    }
  };

  // Vlastní tooltip pro zobrazení názvu kraje a průměrné ceny
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border rounded shadow-lg p-2">
          <p className="font-semibold">{payload[0].payload.kraj}</p>
          <p className="text-muted-foreground">{`${payload[0].value.toLocaleString()} Kč`}</p>
        </div>
      );
    }
    return null;
  };

  // Výpočet nejnižší a nejvyšší ceny
  const prices = adjustedData.map((data) => data.avgPrice);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const percentDifference = ((maxPrice - minPrice) / minPrice) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Průměrná cena za byt v jednotlivých krajích (2023)
        </CardTitle>
        <CardDescription>
          Zobrazené hodnoty představují průměrnou cenu za byt podle zadané
          velikosti.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Input pro zadání vlastní velikosti bytu */}
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
            data={adjustedData.map((data) => ({
              ...data,
              avgPrice: Math.round((data.avgPrice / 65.3) * customSize), // Adjust price based on input size
            }))}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            {/* Osa X zobrazující názvy krajů */}
            <XAxis
              dataKey="kraj"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            {/* Osa Y zobrazující ceny */}
            <Tooltip content={<CustomTooltip />} />
            {/* Bar graph zobrazující průměrnou cenu */}
            <Bar dataKey="avgPrice" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                //formatter={(value) => `${value.toLocaleString()} Kč`} // Zobrazení hodnot s čárkou
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
