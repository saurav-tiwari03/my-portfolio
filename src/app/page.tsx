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
import { Separator } from "@/components/ui/separator";
import ThreeDCardDemo from "@/components/Card";

export default function Home() {

  return ( 
    <div className="relative h-auto w-auto">
      <BlurFade delay={0.3} >
        <main className="items-start my-12 justify-center h-screen flex relative">
          <div className="flex items-center justify-center flex-col">
            {/*Hello Text */}
            <div id='#'>
              <BlurFadeTextDemo >
              </BlurFadeTextDemo>
            </div>
              

            {/*Developer Text */}
            <RotateText />

            {/*Tech stack Used */}
            <div className="flex w-full justify-center my-12">
              <OrbitingCirclesDemo />
            </div>
            

            {/* About me */}
            <div className="w-[40%] my-12">
              <HoverBorderGradientDemo text={"About me"}/>
              <About />
            </div>

            {/*Education */}
            <div className="my-12">
              <HoverBorderGradientDemo text={"Education"}/>
              <Education />
            </div>

            {/*Skills */}
            <div className="w-full  items-center justify-center flex  flex-col h-[400px] relative">
              <div className="flex flex-col gap-4 absolute top-0">
                <div className="pl-14">
                  <HoverBorderGradientDemo text={"Skills"}/>
                </div>
                <div className="flex items-center justify-center">
                  <Skills />
                </div>
              </div>
            </div>

            {/*Projects */}
            <div className="">
              <div><HoverBorderGradientDemo text={"My Projects"}/></div>
              <div>
                <Projects />
              </div>
            </div>

            {/*Blogs */}
            <div className="w-[40%]">
            </div>

          </div>
        </main>
      </BlurFade >
      <Dock />
    </div>
  );
}



export function  Dock() {
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
  const words = `I am Full-Stack Developer. I mainly use Reactjs or Nextjs for frontend and Nodejs for Backend development. I have built various projects that show case my skill. Browser and explore more.`
  return (
    <div className="">
      <TextGenerateEffect words={words} />
    </div>
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
              <span>Intermediate Schooling (Year:2021)</span>
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
    <div className="flex gap-4 w-full">

      {/*Programming languages */}
      <div className="">
        <div className="flex flex-col items-center relative group">
          <h1 className="font-Kanit my-2 text-lg text-violet-500">Languages</h1>
          <Avatar className="absolute top-[40px] group-hover:translate-y-0 duration-100 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="/skills/c++.png" alt="@shadcn" />
            <AvatarFallback className="">C++</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-[56px] group-hover:translate-y-6 duration-150 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full " src="/skills/java.png" alt="@shadcn" />
            <AvatarFallback>Java</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-[72px] group-hover:translate-y-12 duration-200 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://www.python.org/favicon.ico" alt="@shadcn" />
            <AvatarFallback>PY</AvatarFallback>
          </Avatar> 
          <Avatar className="absolute top-[98px] group-hover:translate-y-[66px] duration-200 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://www.typescriptlang.org/favicon.ico" alt="@shadcn" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-[114px] group-hover:translate-y-24 duration-300 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="/skills/js.png" alt="@shadcn" />
            <AvatarFallback className="bg-yellow-400 text-black">JS</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Separator orientation="vertical" />
      {/*Frameworks*/}
      <div className="">
        <div className="flex flex-col items-center relative group">
        <h1 className="font-Kanit my-2 text-lg text-violet-500">Frameworks</h1>
          <Avatar className="absolute top-16 group-hover:translate-y-8 duration-150 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://react.dev/favicon.ico" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-9 group-hover:translate-y-4 duration-100 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://nextjs.org/favicon.ico" alt="@vercel" />
            <AvatarFallback>Next.js</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Separator orientation="vertical"  />
      {/**UI Tools*/}
      <div>
        <div className="flex flex-col items-center relative group">
          <h1 className="font-Kanit my-2 text-lg text-violet-500">UI Tools</h1>
          <Avatar className="absolute top-9 group-hover:translate-y-4 duration-100 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-16 group-hover:translate-y-8 duration-150 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://ui.shadcn.com/favicon.ico" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-24 group-hover:translate-y-10 duration-200 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="/skills/aceternity.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-32 group-hover:translate-y-12 duration-200 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="/skills/magicui.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Separator orientation="vertical"  />
      {/*Backend */}
      <div>
        <div className="flex flex-col items-center relative group">
        <h1 className="font-Kanit my-2 text-violet-500">Backend</h1>
          <Avatar className="absolute top-9 group-hover:translate-y-4 duration-100 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://nodejs.org/static/images/favicons/favicon.png" alt="@nodejs" />
            <AvatarFallback>Node.js</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-16 group-hover:translate-y-8 duration-150 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="/skills/express.png" alt="@typescript" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Separator orientation="vertical"  />
      {/*Database */}
      <div>
        <div className="flex flex-col items-center relative group">   
        <h1 className="font-Kanit my-2 text-lg text-violet-500">Database</h1>
          <Avatar className="absolute top-9 group-hover:translate-y-4 duration-100 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://www.mongodb.com/favicon.ico" alt="@mongodb" />
            <AvatarFallback>MongoDB</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-16 group-hover:translate-y-8 duration-150 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://firebase.google.com/favicon.ico" alt="@redis" />
            <AvatarFallback>Firebase</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-24 group-hover:translate-y-10 duration-200 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="/skills/postgress.png" alt="@postgresql" />
            <AvatarFallback>PostgreSQL</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Separator orientation="vertical"  />
      {/*Services */}
      <div>
        <div className="flex flex-col items-center group relative">
        <h1 className="font-Kanit my-2 text-lg text-violet-500">Services</h1>
          <Avatar className="absolute top-10 group-hover:translate-y-4 duration-100 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="/skills/aws.png" alt="@google" />
            <AvatarFallback>AWS</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-16 group-hover:translate-y-8 duration-150 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://vercel.com/favicon.ico" alt="@aws" />
            <AvatarFallback>Vercel</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-24 group-hover:translate-y-12 duration-200 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://cloudinary.com/favicon.ico" alt="@firebase" />
            <AvatarFallback>Cloudinary</AvatarFallback>
          </Avatar>
          <Avatar className="absolute top-32 group-hover:translate-y-16 duration-300 hover:scale-125 hover:z-50">
            <AvatarImage className="rounded-full" src="https://www.netlify.com/favicon.ico" alt="@firebase" />
            <AvatarFallback>Cloudinary</AvatarFallback>
          </Avatar>
        </div>
      </div>

    </div>
  )
}

function Projects () {
  type Props = {
    title:string;
    description: string;
    imageUrl?:string;
    href:string;
    path:string;
  } 
  const data1:Props = {
    title:"Track it",
    description: "Track it is a platform that helps businesses and individuals manage their finances more effectively. It's built using React, Next.js, and TypeScript.",
    imageUrl: "/projects/trackit.png",
    href: "https://trackit-psi.vercel.app/",
    path: "/projects/trackit"
  }
  const data2:Props = {
    title:"Recipe Keeper",
    description: "A delightful web application where you can collect and organize all your favorite recipes. It's built using React, Next.js, and TypeScript.",
    imageUrl: "/projects/recipe-keeper.png",
    href: "https://recipekkeeper.netlify.app/",
    path: "/projects/recipe-keeper"
  }
  return (
    <div>
      <div className=" w-full">
        <h1 className="text-3xl font-Kanit font-semibold">Check out my latest work</h1>
        <h2 className="flex flex-wrap">I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</h2>
      </div>
      <div className="grid grid-cols-1 p-0 md:grid-cols-2">
        <div className="">
          <ThreeDCardDemo {...data1} />
        </div>
        <div className="">
          <ThreeDCardDemo {...data2} />
        </div>
        <div>
          <ThreeDCardDemo {...data2} />
        </div>
        <div>
          <ThreeDCardDemo {...data1} />
        </div>
      </div>
    </div>
  )
}

function Certificates () {
  return(
    <div> </div>
  )
}

``