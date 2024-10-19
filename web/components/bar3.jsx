"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
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
import { ChartContainer } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  saving: {
    label: "Saving Amount",
    color: "hsl(var(--chart-1))",
  },
};

export function BarPotrebaHypo() {
  const [chartData, setChartData] = useState([]);
  const [percentage, setPercentage] = useState(10); // Default percentage is 10%
  const [priceDifference, setPriceDifference] = useState(0); // For % difference between highest and lowest
  const [maxPrice, setMaxPrice] = useState(0); // Store the max price
  const [minPrice, setMinPrice] = useState(0); // Store the min price

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch median salary data
        const salaryResponse = await fetch(
          "http://localhost:3001/api/mzda/2023"
        );
        const salaryData = await salaryResponse.json();

        // Fetch median property price data
        const propertyResponse = await fetch(
          "http://localhost:3001/api/byt/2023"
        );
        const propertyData = await propertyResponse.json();

        const avgApartmentSize = 65.3; // Average apartment size in m²

        // Combine data
        const combinedData = salaryData.data.map((salaryItem) => {
          // Find the corresponding property item based on the region
          const propertyItem = propertyData.data.find(
            (item) => item.Kraj === salaryItem.kraj // Ensure this matches your salary data structure
          );

          const medPricePerM2 = propertyItem ? propertyItem.AVG : 0; // Use AVG for average price
          const totalPrice = medPricePerM2 * avgApartmentSize; // Total price for the apartment

          // Calculate amount to save based on percentage
          const amountToSave = totalPrice * (percentage / 100);
          const medianSalary = salaryItem.medianMzdovaMzda || 1; // Avoid division by 0

          return {
            kraj: salaryItem.kraj,
            amountToSaveKc: Math.round(amountToSave), // Save amount in Kč, rounded
            amountToSaveMonths: Math.round(amountToSave / medianSalary), // Save amount in months, rounded
            totalPrice, // Store total price for calculations
          };
        });

        // Calculate max and min price
        const prices = combinedData.map((item) => item.totalPrice);
        const max = Math.max(...prices);
        const min = Math.min(...prices);
        const diffPercentage = ((max - min) / min) * 100;

        // Set the data to state
        setMaxPrice(Math.round(max)); // Round max price
        setMinPrice(Math.round(min)); // Round min price
        setPriceDifference(Math.round(diffPercentage)); // Round percentage difference
        setChartData(
          combinedData.filter(
            (item) => item.kraj !== "kraj" && item.kraj !== "Česká republika"
          )
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [percentage]);

  // Custom Tooltip for displaying savings in Kč with space between thousands
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border rounded shadow-lg p-2">
          <p className="font-semibold">{payload[0].payload.kraj}</p>
          <p className="text-muted-foreground">{`Úspory: ${payload[0].value.toLocaleString(
            "cs-CZ"
          )} Kč`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="mx-auto w-3/4 my-8">
      <CardHeader>
        <CardTitle>Potřebná částka pro získání hypotéky</CardTitle>
        <CardDescription>Přepněte mezi 10 % a 20 % úspor</CardDescription>
        <Select
          onValueChange={(value) => setPercentage(Number(value))}
          defaultValue="10"
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Vyberte procento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={10}>10%</SelectItem>
            <SelectItem value={20}>20%</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="kraj"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => String(value).slice(0, 4)} // Convert value to string
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="amountToSaveKc"
              fill={chartConfig.saving.color}
              radius={8}
            >
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
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
