"use client"
import BlurFade from '@/components/magicui/blur-fade';
import Image from 'next/image'
import React, { useState } from 'react'

export default function Blog({params}:{params:{id:string}}) {
  const [like,setLike] = useState(false);
  const [likeCount,setLikeCount] = useState(3)

  const handleLike = () => {
    if (like) {
      setLikeCount((prevCount) => prevCount - 1);
      setLike(false);
    } else {
      setLikeCount((prevCount) => prevCount + 1);
      setLike(true);
    }
  }

  return (
  <BlurFade delay={0.5} inView>
    <div className='flex items-center justify-center pt-12 pb-24'>
      <div className='w-[60vw] '>
          <div className='flex justify-between items-center'>
            <h1 className='text-5xl font-Kanit font-semibold my-4'>OTP Verification</h1>
            <button onClick={handleLike} className='text-xl'>❤️ : {likeCount}</button>
          </div>
        <div>
          <Image src="https://res.cloudinary.com/dtrszmvgn/image/upload/v1726361982/Blog%20uploads/GUkHGyZXUAADbRp_cu3upv.png" alt='/' width={450} height={300} className='w-full'/>
        </div>
        <div className='my-4'>
          <ul className='flex flex-col gap-4'>
            <p className='text-3xl my-4'>Working of OTP verification involes majorly 3 steps</p>
            <li className=''>
              <h1 className='text-xl text-[#8b5cf6]'>1. User requests for login with OTP</h1>
              <p className='pl-4'>In User schema there exists a field called otp which is initially undefined but changes after every successful request.
                  this otp is updated on every successfull request made.</p>
            </li>
            <li>
              <h1 className='text-xl text-[#8b5cf6]'>2. POST request with in email it.</h1>
              <p className='pl-4 flex flex-col'>Whenever users requests for OTP verification with passes email with it in body.
                This request triggers 2 functions simultaneously:
                <span>
                  1. Checks weather this email exist in DB or not
                </span>
                <span>
                  2. If this email exists then it updates the otp field of that user associated with passed email.
                </span>
              </p>
            </li>
            <li>
              <h1 className='text-xl text-[#8b5cf6]'>3. GET request  to verify otp</h1>
              <p className='pl-4 flex flex-col'>Now the final step is a otp is passed with GET request as params or query.
                Now this GET request triggers 2 functions.
                <span>
                  1. It fetchs the value in OTP field of that user in DB.
                </span>
                <span>
                  2. It matchs that otp with OTP entered by user.
                </span>
                <span>
                  3. After successful match it gives access and returns token with User details in it.  
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div>
        </div>
      </div>
    </div>
  </BlurFade>
  )
}
