import { BlurFadeTextDemo } from "@/components/HelloText";
import { MyDock } from "@/components/MyDock";
import { WordRotateDemo } from "@/components/RotateText";
import { HoverBorderGradientDemo } from "@/components/Hireme";
import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
  return ( 
  <BlurFade delay={0.3} inView>
    <main className="items-start mt-12 justify-center h-screen flex relative">
      <div className="flex items-center justify-center flex-col">
        <BlurFadeTextDemo />
        <RotateText />
        <HoverBorderGradientDemo />
      </div>
      <Dock />
    </main>
  </BlurFade >
  );
}

export function Dock() {
  return (
    <div className="fixed bottom-24 flex items-center justify-center">
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