import React from 'react'
import { Dock } from '../page';
import BlurFade from '@/components/magicui/blur-fade';
import { Input } from '@/components/ui/input';
import { IoSearch } from "react-icons/io5";
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata : Metadata ={
  title:"Blogs.Saurav.tsx"
}


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
        <Blog />
      </BlurFade>

      <Dock />
    </div>
  )
}

function Blog () {
  return (
    <>
      <div>
        This is blog page
        <Image src="https://res.cloudinary.com/dtrszmvgn/image/upload/v1726361982/Blog%20uploads/GUkHGyZXUAADbRp_cu3upv.png" alt='' width={100} height={100}/>
      </div>
    </>
  )
}