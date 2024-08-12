"use client";
import { BlurFadeTextDemo } from "@/components/HelloText";
import { MyDock } from "@/components/MyDock";
import { WordRotateDemo } from "@/components/RotateText";
import { HoverBorderGradientDemo } from "@/components/Hireme";
import BlurFade from "@/components/magicui/blur-fade";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { OrbitingCirclesDemo } from "@/components/Technology";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {

  return ( 
    <div className="relative h-auto w-auto">
      <BlurFade delay={0.3} inView>
        <main className="items-start mt-12 justify-center h-screen flex relative">
          <div className="flex items-center justify-center flex-col">
            {/*Hello Text */}
            <BlurFadeTextDemo >
              
            </BlurFadeTextDemo>

            {/*Developer Text */}
            <RotateText />

            {/*Tech stack Used */}
            <div className="my-12">
              <OrbitingCirclesDemo/>
            </div>

            
            {/*Education */}
            <div>
              <HoverBorderGradientDemo text={"Education"}/>
              <Education />
            </div>

            {/* About me */}
            <div className="flex flex-col items-center justify-start">
              <HoverBorderGradientDemo text={"About me"}/>
              <About />
            </div>

          </div>
        </main>
      </BlurFade >
      <div className="fixed inset-0 flex items-center justify-center">
        <Dock />
      </div>
    </div>
  );
}



function Dock() {
  return (
    <div className= "fixed bottom-24 flex items-center justify-center">
      <MyDock />
    </div>
  );
}

function RotateText () {
  return (
    <div className="my-8">
      <h1 className="flex items-center justify-start gap-2">
      <span className="text-2xl md:text-4xl font-semibold">I am </span> <WordRotateDemo /> <span className="text-2xl md:text-4xl font-semibold">Developer</span>
      </h1>
    </div>
  )
}

function About () {
  const words = `At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, I pursued a double degree in computer science and business, interned at big tech companies in Silicon Valley, and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first ever in-person cohort of buildspace called buildspace sf1.`
  return (
    <TextGenerateEffect words={words} />
  )
}

function Education () {
  return (
    <div className="my-12 w-[500px]">
      <div className="w-auto">
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
  );
}

function Skills () {
  return (
    <div>

    </div>
  )
}

function Projects () {
  return (
    <div>
      <div>
        <h1>Check out my latest work</h1>
        <h2>I&appos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</h2>
      </div>
    </div>
  )
}

function Certificates () {
  return(
    <div> </div>
  )
}