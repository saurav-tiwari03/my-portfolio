import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";


export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
      Tech Stack
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent text-5xl"
        duration={20}
        delay={20}
        radius={80}
      >
        <RiNextjsFill />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent text-5xl"
        duration={20}
        delay={10}
        radius={80}
      >
        <TbBrandFramerMotion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent text-5xl"
        radius={160}
        duration={20}
        reverse
      >
        <BiLogoTypescript />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent text-5xl"
        radius={160}
        duration={20}
        delay={20}
        reverse
      >
        <SiTailwindcss />
      </OrbitingCircles>

      <OrbitingCircles
      className="size-[60px] border-none bg-transparent text-4xl"
      radius={240}
      duration={20}
      >
        <SiShadcnui />
      </OrbitingCircles>

      <OrbitingCircles
      className="size-[60px] border-none bg-transparent text-5xl"
      radius={240}
      duration={20}
      delay={18}
      >
        <SiMongodb />
      </OrbitingCircles>

    </div>
  );
}