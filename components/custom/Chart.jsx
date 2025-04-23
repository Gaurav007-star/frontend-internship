"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useCallback, useEffect, useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer
} from "recharts";
import { useResultContext } from "./Context";

const dataTemplate = [
  { x: 0, y: 1 },
  { x: 10, y: 2 },
  { x: 20, y: 3 },
  { x: 30, y: 6 },
  { x: 40, y: 9 },
  { x: 50, y: 12 },
  { x: 60, y: 8 },
  { x: 70, y: 4 },
  { x: 80, y: 2 },
  { x: 90, y: 3 },
  { x: 100, y: 1 }
];

export default function ScoreChart() {
  const [score, setScore] = useState(60);

  const { result } = useResultContext();

  useEffect(() => {
    setScore(result.percentage);
  }, [result]);

  return (
    <div className="w-full h-max">
      <Card className={"w-full h-max border-none outline-none "}>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">Comparison Graph</h2>
          <p className="mb-6 w-full h-max flex items-center">
            <span>
              <span className="font-bold">You scored {score}% percentile</span>{" "}
              which is lower than the average percentile 72% of all the
              engineers who took this assessment
            </span>
            <BsGraphUpArrow size={30} />
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataTemplate}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 100]}
                allowDataOverflow={false}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
              <ReferenceLine
                x={score}
                stroke="gray"
                strokeWidth={1}
                label={{ value: "your percentile" }}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-6">
            <Slider
              defaultValue={[score]}
              max={100}
              step={1}
              className="w-full hidden"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
