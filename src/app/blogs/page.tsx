import React from 'react'
import { Dock } from '../page';
import BlurFade from '@/components/magicui/blur-fade';
import { Input } from '@/components/ui/input';
import { IoSearch } from "react-icons/io5";
import { Separator } from '@/components/ui/separator';


export default function page() {
  return (
    <div className='mt-4'>
      <BlurFade delay={0.3} inView>
        <div className=" gap-4">
          <h1 className='text-5xl text-violet-500 font-semibold font-Kanit text-center'>Realm of Resources & Insights</h1>
          <h1 className='text-2xl text-violet-500 font-Kanit text-center my-4'>&quot;Unlocking Knowledge, One Insight at a Time&quot;</h1>
        </div>  
        <div className='flex items-center justify-center my-4'>
          <div className='flex items-center justify-center relative'>
            <IoSearch className='text-3xl absolute right-1'/>
            <Input className='h-[40px] w-[300px] pl-4' placeholder='Search blog'/> 
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <p className='h-[2px] w-[60%] bg-[#27272a]'></p>
        </div>
      </BlurFade>
      <Dock />
    </div>
  )
}
