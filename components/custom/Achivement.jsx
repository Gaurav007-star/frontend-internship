"use client";

import React from "react";
import { Trophy, ClipboardList, CheckSquare } from "lucide-react";
import { useResultContext } from "./Context";

const Achivement = () => {
  const { result } = useResultContext();

  return (
    <div className="max-w-4xl w-full mx-auto bg-white rounded-lg p-6 border-2 border-slate-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Statistics
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-center divide-y sm:divide-y-0 sm:divide-x">

        
        {/* rank */}
        <div className="flex flex-col sm:flex-row items-center justify-center px-2 py-2 space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-1/3">
          <div className="bg-gray-100 rounded-full p-2">
            <Trophy className="text-yellow-500 w-6 h-6" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-[14px] font-semibold text-gray-900">
              {result && result.rank}
            </div>
            <div className="text-[14px] text-gray-500">YOUR RANK</div>
          </div>
        </div>

        {/* percentage */}
        <div className="flex flex-col sm:flex-row items-center justify-center px-2 py-2 space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-1/3">
          <div className="bg-gray-100 rounded-full p-2">
            <ClipboardList className="text-gray-500 w-6 h-6" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-[14px] font-semibold text-gray-900">
              {result && result.percentage}
            </div>
            <div className="text-[14px] text-gray-500">PERCENTILE</div>
          </div>
        </div>

        {/* score */}
        <div className="flex flex-col sm:flex-row items-center justify-center px-2 py-2 space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-1/3">
          <div className="bg-gray-100 rounded-full p-2">
            <CheckSquare className="text-green-500 w-6 h-6" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-[14px] font-semibold text-gray-900">
              {result && result.currentScore}
            </div>
            <div className="text-[14px] text-gray-500">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
