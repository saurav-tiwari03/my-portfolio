"use client"
import React from 'react'
import { Dock } from '../page';
import BlurFade from '@/components/magicui/blur-fade';
import { Input } from '@/components/ui/input';
import { IoSearch } from "react-icons/io5";
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';



export default function BlogPage() {
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
      <Link href={`/blogs/otp`} className='flex p-4'>
        <div className='dark:bg-[#1c1c1c] bg-[#f1f1f1] p-4 w-[350px] mt-4 rounded-lg'>
          <Image src="https://res.cloudinary.com/dtrszmvgn/image/upload/v1726361982/Blog%20uploads/GUkHGyZXUAADbRp_cu3upv.png" alt='' width={350} height={250}/>
          <h1 className='text-3xl font-Kanit my-4  hover:text-[#8b5cf6] duration-300'>OTP verification</h1>
          <p>Working of OTP verification to make easy login</p>
        </div>
      </Link>
    </>
  )
}