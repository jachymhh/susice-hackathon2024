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
import { ToolTip } from "./toolTip";

const chartConfig = {
  saving: {
    label: "Saving Amount",
    color: "hsl(var(--chart-1))",
  },
};

export function BarPotrebaHypo() {
  const [chartData, setChartData] = useState([]);
  const [percentage, setPercentage] = useState(10);
  const [priceDifference, setPriceDifference] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const salaryResponse = await fetch("/api/mzda/2023");
        const salaryData = await salaryResponse.json();

        const propertyResponse = await fetch("/api/byt/2023");
        const propertyData = await propertyResponse.json();

        const avgApartmentSize = 65.3;

        const combinedData = salaryData.data.map((salaryItem) => {
          const propertyItem = propertyData.data.find(
            (item) => item.Kraj === salaryItem.kraj
          );

          const medPricePerM2 = propertyItem ? propertyItem.AVG : 0;
          const totalPrice = medPricePerM2 * avgApartmentSize;

          const amountToSave = totalPrice * (percentage / 100);
          const medianSalary = salaryItem.medianMzdovaMzda || 1;

          return {
            kraj: salaryItem.kraj,
            amountToSaveKc: Math.round(amountToSave),
            amountToSaveMonths: Math.round(amountToSave / medianSalary),
            totalPrice,
          };
        });

        const prices = combinedData.map((item) => item.totalPrice);
        const max = Math.max(...prices);
        const min = Math.min(...prices);
        const diffPercentage = ((max - min) / min) * 100;

        setMaxPrice(Math.round(max));
        setMinPrice(Math.round(min));
        setPriceDifference(Math.round(diffPercentage));
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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <ToolTip
          title={payload[0].payload.kraj}
          p={`Úspory: ${payload[0].value.toLocaleString("cs-CZ")} Kč`}
        ></ToolTip>
      );
    }
    return null;
  };

  return (
    <Card className="mx-auto w-full h-3/4 md:w-3/4 my-8">
      <CardHeader>
        <CardTitle>Potřebná částka pro získání hypotéky</CardTitle>
        <CardDescription>Přepněte mezi 10 % a 20 % úspor</CardDescription>

        <Select
          onValueChange={(value) => setPercentage(Number(value))}
          defaultValue="10"
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Vyberte procenta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={10} key={10}>
              10%
            </SelectItem>
            <SelectItem value={20} key={20}>
              20%
            </SelectItem>
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
              tickFormatter={(value) => String(value).slice(0, 3)}
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
                className="fill-foreground text-sm hidden md:block"
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
