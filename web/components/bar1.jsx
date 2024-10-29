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
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ToolTip } from "./toolTip";

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

const fetchDataFromApi = async (year) => {
  const response = await fetch(`/api/mzda/${year}`);
  const data = await response.json();

  return data.data.slice(1).map((kraj) => ({
    kraj: kraj.kraj,
    Median_mzda_celkem: kraj.med,
  }));
};

export function BarMzdaRoky() {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchDataFromApi(selectedYear);
      setChartData(data);
    };

    loadData();
  }, [selectedYear]);

  const medianMzdy = chartData.map((kraj) => kraj.Median_mzda_celkem);
  const maxMzda = Math.max(...medianMzdy);
  const minMzda = Math.min(...medianMzdy);

  const percentDifference = ((maxMzda - minMzda) / minMzda) * 100;

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <ToolTip
          title={payload[0].payload.kraj}
          p={`Mzda: ${payload[0].value.toLocaleString()} Kč`}
        ></ToolTip>
      );
    }
    return null;
  };

  return (
    <div className="h-3/4">
      <Card className="mx-auto w-full md:w-3/4 my-8">
        <CardHeader>
          <CardTitle>Mzdy podle krajů ({selectedYear})</CardTitle>
          <CardDescription>
            <Select onValueChange={setSelectedYear} defaultValue={selectedYear}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Vyberte rok" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardDescription>
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
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="Median_mzda_celkem"
                fill="var(--color-desktop)"
                radius={8}
              >
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
            Procentuální rozdíl mezi nejvyšší a nejnižší mzdou:
            <span className="font-bold">{percentDifference.toFixed(2)}%</span>
          </div>
          <div className="leading-none text-muted-foreground">
            Nejvyšší mzda: {maxMzda.toLocaleString()} Kč, Nejnižší mzda:{" "}
            {minMzda.toLocaleString()} Kč
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
