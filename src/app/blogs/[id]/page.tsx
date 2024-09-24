import React from 'react'
import Blog from './Blog'
import { Dock } from '@/app/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "OTP verification",
  description: "Explanation of OTP verification steps.",
}

export default function page({params}:{params:{id:string}}) {
  return (
    <div><Blog params={params}/><Dock /></div>
  )
}
