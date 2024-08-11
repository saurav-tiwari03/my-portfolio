import BlurFade from "@/components/magicui/blur-fade";

export function BlurFadeTextDemo() {
  return (
    <section id="header" className="text-center gap-2 flex flex-col">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-WorkSans " >
          Hi, Saurav Tiwari 🥱
        </h2>
      </BlurFade>
      <BlurFade delay={0.5 * 2} inView>
        <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none font-WorkSans text-center">
          star it if you liked it
        </span>
      </BlurFade>
    </section>
  );
}
