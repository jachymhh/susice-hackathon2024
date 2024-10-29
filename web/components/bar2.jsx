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
import { ToolTip } from "./toolTip";

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

  useEffect(() => {
    const fetchData = async () => {
      const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
      const data = [];

      for (const year of years) {
        const response = await fetch(`/api/mzda/${year}`);
        const json = await response.json();
        const filteredData = json.data.slice(1);
        filteredData.forEach((item) => {
          data.push({ rok: year, mzda: item.med, kraj: item.kraj });
        });
      }
      setChartData(data);
      setRegions([...new Set(data.map((item) => item.kraj))]); // Unique regions

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

  const filteredChartData = selectedRegion
    ? chartData.filter((item) => item.kraj === selectedRegion)
    : chartData;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <ToolTip
          title={payload[0].payload.rok}
          p={`Mzda: ${payload[0].value.toLocaleString()} Kč`}
        ></ToolTip>
      );
    }
    return null;
  };

  return (
    <Card className="mx-auto w-full h-3/4 md:w-3/4 my-8">
      <CardHeader>
        <CardTitle>Vývoj mzdy od roku 2015 do 2023</CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          value={selectedRegion}
          onValueChange={(region) => {
            setSelectedRegion(region);

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
            <SelectValue placeholder="Vyberte kraj" />
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
            }
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
              tickFormatter={(value) => String(value).slice(0, 4)} 
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="mzda" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground text-sm hidden md:block" 
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
