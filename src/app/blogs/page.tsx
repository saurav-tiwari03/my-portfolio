import React from 'react'
import { Metadata } from 'next';
import BlogPage from './BlogPage';
import { Dock } from '../page';

export const metadata : Metadata ={
  title:"Blogs.Saurav.tsx"
}


export default function page() {
  return (
    <>
      <BlogPage />
      <Dock />
    </>
  )
}
