"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import Image from "next/image";
import { Input } from "../ui/input";
import { FaArrowRight } from "react-icons/fa6";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill
} from "react-icons/pi";
import { useResultContext } from "./Context";

const Modal = () => {
  const { result, SetResult } = useResultContext();

  const InputHandler = (e) => {
    const { name, value } = e.target;
    const number = Number(value);

    if (value.trim() === "" || isNaN(number)) {
      SetResult({ ...result, [name]: "" }); // Optional: track error in another state
      return;
    }

    // Validate ranges
    if (
      (name === "percentage" && (number < 0 || number > 100)) ||
      (name === "currentScore" && (number < 0 || number > 15))
    ) {
      return;
    }

    SetResult({ ...result, [name]: number });
  };

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className={"bg-indigo-900 text-white p-5 cursor-pointer "}
      >
        <Button variant="outline">Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="w-full flex py-4 justify-between ">
          <span className="text-2xl">Update Score</span>
          <Image alt="html" src={"/pngwing.com.png"} width={25} height={20} />
        </DialogTitle>

        <DialogHeader>
          {/* add inputs */}

          {/* update rank */}
          <div className="input flex items-center justify-between">
            <PiNumberCircleOneFill size={45} className="mr-5 text-indigo-800" />
            <p className="text-[14px] w-full">
              Update your <span className="font-bold">Rank</span>
            </p>
            <div className="input-section">
              <Input
                className={"w-[10vw] border-indigo-500 border-2"}
                type="text"
                placeholder="rank"
                value={result.rank}
                name="rank"
                onChange={InputHandler}
              />
              {result && result.rank == 0 && (
                <span className="text-red-500 text-[9px]">
                  Rank must be a number
                </span>
              )}
            </div>
          </div>

          {/* update Percentine */}
          <div className="input flex items-center justify-between">
            <PiNumberCircleTwoFill size={45} className="mr-5 text-indigo-800" />
            <p className="text-[14px] w-full">
              Update your <span className="font-bold">Percentile</span>
            </p>

            <div className="input-section">
              <Input
                className={"w-[10vw] border-indigo-500 border-2"}
                type="text"
                placeholder="percentile"
                name="percentage"
                onChange={InputHandler}
                value={result.percentage}
              />
              {(result && result.percentage <= 100) ||
                (result.percentage >= 0 && (
                  <span className="text-red-500 text-[9px]">
                    required | percentile 0-100
                  </span>
                ))}
            </div>
          </div>

          {/* update current score */}
          <div className="input flex items-center justify-between">
            <PiNumberCircleThreeFill
              size={45}
              className="mr-5 text-indigo-800"
            />
            <p className="text-[14px] w-full">
              Update your{" "}
              <span className="font-bold">Current Score (out of 15)</span>
            </p>

            <div className="input-section">
              <Input
                className={"w-[10vw] border-indigo-500 border-2"}
                type="text"
                placeholder="score"
                required
                value={result.currentScore}
                name="currentScore"
                onChange={InputHandler}
              />
              {(result && result.currentScore <= 15) ||
                (result.currentScore >= 0 && (
                  <span className="text-red-500 text-[9px]">
                    required | score 0-15
                  </span>
                ))}
            </div>
          </div>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className={"border-2 border-black cursor-pointer"}
            >
              Close
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              type="button"
              variant="primary"
              className={"bg-black border-black text-white cursor-pointer"}
            >
              Save <FaArrowRight color="white" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
