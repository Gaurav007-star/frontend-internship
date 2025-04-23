import React from "react";

const data = [
  { title: "HTML Tools, Forms, History", value: 80, color: "blue" },
  { title: "Tags & References in HTML", value: 60, color: "orange" },
  { title: "Tables & References in HTML", value: 24, color: "red" },
  { title: "Tables & CSS Bascis", value: 96, color: "green" }
];

const colorVariants = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  green: "bg-green-500",
  lightblue: "bg-blue-100",
  lightorange: "bg-orange-100",
  lightred: "bg-red-100",
  lightgreen: "bg-green-100"
};

const SyllabusAnalysis = () => {
  return (
    <div className=" w-full mx-auto rounded-lg py-8 px-10 border-2 border-slate-200">
      <h2 className="text-lg font-semibold text-gray-800 ">
        Syllabus Wise Analysis
      </h2>
      {data.map(({ title, value, color }, index) => (
        <div key={index} className="my-8">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">{title}</span>
            <span className="text-sm font-semibold text-{color}-600">
              {value}%
            </span>
          </div>
          <div
            className={`w-full h-2 rounded-full ${
              colorVariants[`light${color}`]
            }`}
          >
            <div
              className={`h-2 rounded-full ${colorVariants[color]}`}
              style={{ width: `${value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusAnalysis;
