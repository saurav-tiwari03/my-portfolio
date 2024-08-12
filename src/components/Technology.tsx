import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { SiShadcnui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


export function OrbitingCirclesDemo() {
  return (
    <div className="relative  flex h-[500px] w-[600px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none w-full whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Tech Stack
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent text-2xl"
        duration={10}
        delay={20}
        radius={80}
      >
        <RiNextjsFill />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent text-2xl"
        duration={10}
        delay={5}
        radius={80}
      >
        <SiMongodb />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent text-3xl"
        radius={160}
        duration={20}
        reverse
      >
        <SiTailwindcss />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent text-2xl"
        radius={160}
        duration={20}
        delay={20}
        reverse
      >
        <SiShadcnui />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent text-3xl"
        radius={240}
        duration={30}
        delay={20}
      >
        <BiLogoTypescript />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent text-3xl"
        radius={240}
        duration={30}
        delay={35}
      >
        <IoLogoGithub />
      </OrbitingCircles>
    </div>
  );
}
