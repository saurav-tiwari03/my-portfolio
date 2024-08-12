"use client";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const [words, setWords] = useState([
    { text: "Hi," },
    { text: "Saurav Tiwari", className: "text-violet-500 dark:text-violet-500" }
  ]);

  useEffect(() => {
    setWords([
      { text: "Hi," },
      { text: "Saurav Tiwari 🥱", className: "text-violet-500 dark:text-violet-500" }
    ]);
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
