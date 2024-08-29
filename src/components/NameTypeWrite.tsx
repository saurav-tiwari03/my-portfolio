"use client";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const [words, setWords] = useState([
    { text: "Hi," },
    { text: "Saurav Tiwari", className: "text-violet-500 dark:text-violet-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl" }
  ]);

  useEffect(() => {
    setWords([
      { text: "Hi," },
      { text: "Saurav Tiwari 🥱", className: "text-violet-500 dark:text-violet-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl" }
    ]);
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
