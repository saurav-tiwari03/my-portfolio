import WordRotate from "@/components/magicui/word-rotate";

export async function WordRotateDemo() {
  return (
    <WordRotate
      className="text-2xl md:text-4xl font-bold font-Poppins text-[#6d28d9] dark:text-[#6d28d9] w-[130px] md:w-[195px]"
      words={["Full-Stack", "Backend","Frontend"]}
    />
  );
}
