/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

export default function BenchmarkDonutChart({ data }: { data: any }) {
  const total = data.reduce((sum: any, item: any) => sum + item.value, 0);
  const [selected, setSelected] = useState("");

  console.log(selected, "selected");

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Benchmark</h2>
          <p className="text-xs text-muted-foreground">Supporting text</p>
          <p className="text-xl font-bold">
            1.234
            <span className="text-sm font-normal align-bottom text-gray-400">
              .50
            </span>
            <span className="text-sm font-normal align-bottom">%</span>
          </p>
        </div>
        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger
            size="sm"
            className="w-[115px] text-[#666D80] font-[500] text-xs rounded-[10px]"
          >
            <SelectValue placeholder="Selection 1" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Selection 1">Selection 1</SelectItem>
            <SelectItem value="Selection 2">Selection 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <CardContent className="flex flex-col items-center">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry: { color: string | undefined }, index: any) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          {data.map((entry: any, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-muted-foreground">
                {" "}
                {entry.name} {((entry.value / total) * 100).toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
