"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

type Props = {
  text:String
}

export function HoverBorderGradientDemo(props:Props) {
  return (
    <div className="flex justify-start text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
      >
      {props.text}
      </HoverBorderGradient>
    </div>
  );
}
