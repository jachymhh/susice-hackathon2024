"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { name: "Leden", uv: 4000, pv: 2400 },
  { name: "Únor", uv: 3000, pv: 1398 },
  { name: "Březen", uv: 2000, pv: 9800 },
  { name: "Duben", uv: 2780, pv: 3908 },
  { name: "Květen", uv: 1890, pv: 4800 },
  { name: "Červen", uv: 2390, pv: 3800 },
  { name: "Červenec", uv: 3490, pv: 4300 },
];

export function PomerovaKrivka() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Poměrová Křivka</CardTitle>
        <CardDescription>Vývoj v letech 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </CardContent>
      <CardFooter>
        <div className="leading-none text-muted-foreground">
          Zobrazeno srovnání měsíčních hodnot.
        </div>
      </CardFooter>
    </Card>
  );
}
