import React from 'react'
import { Metadata } from 'next';
import BlogPage from './BlogPage';
import { Dock } from '../page';

export const metadata: Metadata = {
  title: "Blogs.Saurav.tsx",
  description: "Explanation of OTP verification steps.",
}


export default function page() {
  return (
    <>
      <BlogPage />
      <Dock />
    </>
  )
}
