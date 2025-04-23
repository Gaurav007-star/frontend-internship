"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useResultContext } from "./Context";

const Pichart = () => {
  const { result } = useResultContext();

  const [score, setScore] = useState(12);

  const total = 15;
  const percentage = (score / total) * 100;

  useEffect(() => {
    setScore(result.currentScore);
  }, [result]);

  //   set the offset
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <Card className="my-4 w-full mx-auto px-4 py-6 rounded-xl shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-black flex justify-between items-center">
          Question Analysis
          <span className="text-blue-600 font-bold">
            {score}/{total}
          </span>
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          <span className="font-semibold text-black">
            You scored {score} question{score !== 1 && "s"} correct out of{" "}
            {total}.
          </span>{" "}
          However it still needs some improvements
        </p>
      </CardHeader>

      <CardContent className="flex justify-center items-center mt-4">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 40 40" className="w-full h-full rotate-[-90deg]">
            {/* Background Circle */}
            <circle
              cx="20"
              cy="20"
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="4"
            />
            {/* Foreground Arc */}
            <circle
              cx="20"
              cy="20"
              r={radius}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/target-icon.jpg" alt="target" className="w-10 h-10" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Pichart;
