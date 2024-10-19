"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

export const description = "Bar Chart - Saving Amount for an Average Apartment";

const chartConfig = {
  saving: {
    label: "Saving Amount",
    color: "hsl(var(--chart-1))",
  },
};

export function BarPotrebaHypo() {
  const [chartData, setChartData] = useState([]);

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

        console.log("Salary Data:", salaryData);
        console.log("Property Data:", propertyData);

        const avgApartmentSize = 65.3; // Average apartment size in m²

        // Combine data
        const combinedData = salaryData.data.map((salaryItem) => {
          // Find the corresponding property item based on the region
          const propertyItem = propertyData.data.find(
            (item) => item.Kraj === salaryItem.kraj // Ensure this matches your salary data structure
          );

          // Check the property item
          console.log("Property Item:", propertyItem);

          const medPricePerM2 = propertyItem ? propertyItem.AVG : 0; // Use AVG for average price
          const totalPrice = medPricePerM2 * avgApartmentSize; // Total price for the apartment

          // Debugging output
          console.log(
            `Kraj: ${salaryItem.kraj}, Median Price Per m²: ${medPricePerM2}, Total Price: ${totalPrice}`
          );

          const amountToSave = totalPrice * 0.1; // Calculate 10% of the total price

          return {
            kraj: salaryItem.kraj,
            amountToSave,
          };
        });

        console.log("Combined Data:", combinedData); // Log combined data for debugging

        // Filter out unwanted entries
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
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Saving Amount for Average Apartment</CardTitle>
        <CardDescription>Data for the year 2023</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="amountToSave"
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
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing the amount needed to save for an average apartment in 2023
        </div>
      </CardFooter>
    </Card>
  );
}
