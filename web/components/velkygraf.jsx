"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive line chart";

const years = [...Array(8)].map((_, i) => (2016 + i).toString()); // Generates years 2016 to 2023

export function Velkygraf() {
  const [activeChart, setActiveChart] = React.useState("mobile");
  const [chartData, setChartData] = React.useState([]);
  const [total, setTotal] = React.useState({
    desktop: 0,
    mobile: 0,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch apartment data for each year
        const averagePrices = await Promise.all(
          years.map(async (year) => {
            const bytyResponse = await fetch(
              `https://susice-hackathon2024.vercel.app//api/byt/${year}`
            );
            const bytyData = await bytyResponse.json();
            // Assuming each response has an AVG field for the average price
            return {
              year,
              avg: bytyData.data[0]?.AVG || 0, // Use 0 if data is not available
            };
          })
        );

        // Calculate the average price for all years
        const avgPrice =
          averagePrices.reduce((acc, item) => acc + item.avg, 0) /
          averagePrices.length;

        // Fetch salary data for each year
        const medianSalaries = await Promise.all(
          years.map(async (year) => {
            const mzdaResponse = await fetch(
              `https://susice-hackathon2024.vercel.app//api/mzda/${year}`
            );
            const mzdaData = await mzdaResponse.json();
            // Assuming each response has a med field for the median salary
            return {
              year,
              median: mzdaData.data[0]?.med || 0, // Use 0 if data is not available
            };
          })
        );

        // Calculate the average median salary for all years
        const avgMedianSalary =
          medianSalaries.reduce((acc, item) => acc + item.median, 0) /
          medianSalaries.length;

        // Create chart data for the years
        const newChartData = years.map((year) => ({
          date: year, // Keep only the year
          desktop: avgPrice,
          mobile: avgMedianSalary,
        }));

        setChartData(newChartData);
        setTotal({ desktop: avgPrice, mobile: avgMedianSalary });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const chartConfig = {
    views: {
      label: "Average Price",
    },
    desktop: {
      label: "Average Apartment Price",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Average Median Salary",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Line Chart - Average Prices & Salaries</CardTitle>
          <CardDescription>
            Average prices of apartments and median salaries from 2016 to 2023
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            return (
              <button
                key={key}
                data-active={activeChart === key}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(key)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[key].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date" // Display year only
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value} // Display year as is
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => value} // Show year directly
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
