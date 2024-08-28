"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

type Props = {
  title:string;
  description: string;
  imageUrl?:string;
  href:string;
  path:string;
}

export default function ThreeDCardDemo(data:Props) {
  return (
    <CardContainer className="">
      <CardBody className="bg-gray-50 flex flex-col items-start justify-between dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[400px] h-[325px] rounded-xl p-6 border  ">
        <div className="flex flex-col">
          <CardItem
            translateZ="50"
            className="text-lg font-bold text-neutral-600 dark:text-white"
            >
            {data.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300"
            >
            {data.description}
          </CardItem>
        </div>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`${data.imageUrl}`}
            height="1000"
            width="1000"
            className="h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center w-full">
          <CardItem
            translateZ={20}
            as={Link}
            href={`${data.href}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Demo →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            href={`${data.path}`}
          >
            View
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
