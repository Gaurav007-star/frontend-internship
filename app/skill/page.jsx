import Modal from "@/components/custom/Modal";
import SyllabusAnalysis from "@/components/custom/SyllabusAnalysis";
import Image from "next/image";
import React from "react";

import Chart from "@/components/custom/Chart";
import Achivement from "@/components/custom/Achivement";
import Pichart from "@/components/custom/Pichart";

const page = () => {
  return (
    <div className="w-full h-auto py-4">
      <h1 className="w-full pl-15 py-5 text-slate-400">Skill Test</h1>

      <div className="wrapper w-full h-max flex pl-15 max-[1024px]:flex-col max-[340px]:pl-2">
        {/* left-section */}
        <div className="skill-left w-[60%] max-[1024px]:w-full max-[340px]:pr-2 max-[1024px]:pr-10 h-max flex flex-col gap-2">
          {/* first box */}
          <div className="box w-full h-max flex rounded-[10px] border-2 border-slate-200 justify-evenly max-[340px]:flex-col">
            {/* first box left section */}
            <div className="left-section flex items-center">
              <Image
                alt="html"
                src={"/pngwing.com.png"}
                width={50}
                height={50}
                className="m-5 max-[640px]:w-[30px] max-[640px]:h-[30px]"
              />

              <div className="desc flex flex-col justify-center max-[640px]:text-[13px] max-[340px]:10px">
                <span className="font-bold">Hyper Text markup Language</span>
                <span className="text-slate-400 max-[640px]:text-[10px] max-[340px]:text-[8px]">
                  Questions:08 | Duration: 15 mins | Submitted on 5th june 2021{" "}
                </span>
              </div>
            </div>

            {/* update -section -modal */}
            <div className="right-detail-section p-2 flex items-center">
              <Modal />
            </div>
          </div>

          {/* second box */}
          <Achivement />

          {/* third box */}
          <div className="box w-full h-max flex rounded-[10px] border-2 border-slate-200 justify-evenly">
            <Chart />
          </div>
        </div>

        {/* right-section */}
        <div className="skill-right w-[40%] h-max max-[1024px]:w-full max-[1024px]:pr-10 max-[1024px]:py-5  max-[340px]:pr-2">
          <div className="syllabus-analysis w-full h-full px-10 max-[1024px]:px-0 ">
            <SyllabusAnalysis />
            <Pichart />
          </div>
        </div>
      </div>

      {/* set skill points */}
    </div>
  );
};

export default page;
