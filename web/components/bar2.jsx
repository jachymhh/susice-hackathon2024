"use client";

import { useEffect, useState } from "react";
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
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"; // Updated imports

export const description = "A bar chart with a label";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export function BarMzdaKraje() {
  const [chartData, setChartData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Česká republika"); // Default to whole Czech Republic
  const [regions, setRegions] = useState([]);

  // Fetch data for each year
  useEffect(() => {
    const fetchData = async () => {
      const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
      const data = [];

      for (const year of years) {
        const response = await fetch(
          `https://susice-hackathon2024.vercel.app//api/mzda/${year}`
        );
        const json = await response.json();
        // Exclude the first result (which is the "kraj" placeholder)
        const filteredData = json.data.slice(1);
        // Collect all regions
        filteredData.forEach((item) => {
          data.push({ rok: year, mzda: item.med, kraj: item.kraj });
        });
      }
      setChartData(data);
      // Set unique regions excluding the first entry
      setRegions([...new Set(data.map((item) => item.kraj))]); // Unique regions
    };

    fetchData();
  }, []);

  // Filter chart data based on selected region
  const filteredChartData = selectedRegion
    ? chartData.filter((item) => item.kraj === selectedRegion)
    : chartData;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>Data from 2015 to 2023</CardDescription>
      </CardHeader>
      <CardContent>
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger>
            <SelectValue placeholder="Select a region" />
          </SelectTrigger>
          <SelectContent>
            {/* Create SelectItem for each region */}
            {regions.map((region, index) => (
              <SelectItem key={index} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={
              filteredChartData.length > 0
                ? filteredChartData
                : chartData.filter((item) => item.kraj === "Česká republika")
            } // Default to whole CR
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="rok"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => String(value).slice(0, 4)} // Convert value to string
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="mzda" fill="var(--color-desktop)" radius={8}>
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
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
