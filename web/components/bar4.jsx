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
import { ToolTip } from "./toolTip";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export function BarPrumernaCena() {
  const [customSize, setCustomSize] = useState(65.3);
  const [adjustedData, setAdjustedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/byt/2023`);
        const result = await response.json();
        const basePrices = result.data.map((item) => ({
          kraj: item.Kraj,
          avgPrice: item.AVG,
        }));

        const updatedData = basePrices.map((data) => ({
          ...data,
          avgPrice: Math.round(data.avgPrice * 65.3),
        }));

        setAdjustedData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    if (newSize === "") {
      setCustomSize("");
    } else {
      const parsedSize = parseFloat(newSize);
      if (!isNaN(parsedSize)) {
        setCustomSize(parsedSize);
      }
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <ToolTip
          title={payload[0].payload.kraj}
          p={`${payload[0].value.toLocaleString()} Kč`}
        ></ToolTip>
      );
    }
    return null;
  };

  const prices = adjustedData.map((data) => data.avgPrice);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const percentDifference = ((maxPrice - minPrice) / minPrice) * 100;

  return (
    <Card className="mx-auto w-full h-3/4 md:w-3/4 my-8">
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
              avgPrice: Math.round((data.avgPrice / 65.3) * customSize),
            }))}
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
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar dataKey="avgPrice" fill="var(--color-desktop)" radius={8}>
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
