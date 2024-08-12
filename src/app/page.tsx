"use client";
import { BlurFadeTextDemo } from "@/components/HelloText";
import { MyDock } from "@/components/MyDock";
import { WordRotateDemo } from "@/components/RotateText";
import { HoverBorderGradientDemo } from "@/components/Hireme";
import BlurFade from "@/components/magicui/blur-fade";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { OrbitingCirclesDemo } from "@/components/Technology";

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
            <div className="flex w-full justify-center my-12">
              <OrbitingCirclesDemo />
            </div>
            
            {/*Education */}
            <div>
              <HoverBorderGradientDemo text={"Education"}/>
              <Education />
            </div>

            {/* About me */}
            <div className="flex relative flex-col items-center justify-start">
              <div className="flex justify-start items-start w-[450px]">
                <HoverBorderGradientDemo text={"About me"}/>
              </div>
              <About />
            </div>

          </div>
        </main>
      </BlurFade >
      <Dock />
    </div>
  );
}



function Dock() {
  return (
    <div className= "fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50"  id='navbar'>
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
  const words = `I am Full-Stack Developer. I use mainly Reactjs or Nextjs for frontend and Nodejs for Backend development`
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
        <AccordionTrigger>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="/galgotia.jpg" />
              <AvatarFallback>GCET</AvatarFallback>
            </Avatar> 
            <p className="flex items-start flex-col ">
              <span>Galgotia College of Eningeering and Technology</span>
              <span>B.Tech IT (Year:2025)</span>
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          I currently pursuing B.Tech in IT from Galgotia college of engineering and Technology
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="/rmvm.jpg" />
              <AvatarFallback>GCET</AvatarFallback>
            </Avatar> 
            <p className="flex items-start flex-col ">
              <span>Raman Munjal Vidya Mandir</span>
              <span>Intermediate (Year:2021)</span>
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          I have completed my Intermediate Schooling from Raman Munjal Vidya Mandir in field of Science (Non-Medical) 
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="/rmvm.jpg" />
              <AvatarFallback>GCET</AvatarFallback>
            </Avatar> 
            <p className="flex items-start flex-col ">
              <span>Raman Munjal Vidya Mandir</span>
              <span>High School (Year:2019)</span>
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
        I have completed my Intermediate Schooling from Raman Munjal Vidya Mandir.
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