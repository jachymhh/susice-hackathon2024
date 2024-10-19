"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

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
  const [growthPercentage, setGrowthPercentage] = useState(null); // New state for growth percentage

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
      setRegions([...new Set(data.map((item) => item.kraj))]); // Unique regions

      // Calculate growth percentage for the default region (whole CR)
      const defaultRegionData = data.filter(
        (item) => item.kraj === "Česká republika"
      );
      if (defaultRegionData.length > 0) {
        const firstMzda = defaultRegionData[0].mzda; // Mzda for the first year
        const lastMzda = defaultRegionData[defaultRegionData.length - 1].mzda; // Mzda for the last year
        const growth = ((lastMzda - firstMzda) / firstMzda) * 100;
        setGrowthPercentage(growth);
      }
    };

    fetchData();
  }, []);

  // Filter chart data based on selected region
  const filteredChartData = selectedRegion
    ? chartData.filter((item) => item.kraj === selectedRegion)
    : chartData;

  // Custom Tooltip for displaying region name and wage
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border rounded shadow-lg p-2">
          <p className="font-semibold">{payload[0].payload.rok}</p>
          <p className="text-muted-foreground">{`Mzda: ${payload[0].value.toLocaleString()} Kč`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vývoj mzdy od roku 2015 do 2023</CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          value={selectedRegion}
          onValueChange={(region) => {
            setSelectedRegion(region);

            // Calculate growth percentage for selected region
            const regionData = chartData.filter((item) => item.kraj === region);
            if (regionData.length > 0) {
              const firstMzda = regionData[0].mzda;
              const lastMzda = regionData[regionData.length - 1].mzda;
              const growth = ((lastMzda - firstMzda) / firstMzda) * 100;
              setGrowthPercentage(growth);
            }
          }}
        >
          <SelectTrigger className="w-40">
            {" "}
            {/* Narrower width */}
            <SelectValue placeholder="Select a region" />
          </SelectTrigger>
          <SelectContent>
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
            <Tooltip content={<CustomTooltip />} /> {/* Use CustomTooltip */}
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
          Procentuální nárůst od roku 2015:
          {growthPercentage !== null && (
            <span className="font-bold">{growthPercentage.toFixed(2)}%</span>
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Zobrazuje vývoj mzdy v jednotlivých krajích.
        </div>
      </CardFooter>
    </Card>
  );
}
