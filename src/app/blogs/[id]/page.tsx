import React from 'react'
import Blog from './Blog'
import { Dock } from '@/app/page'

export const Metadata ={
  title:"Blog.Saurav.tsx"
}

export default function page({params}:{params:{id:string}}) {
  return (
    <div><Blog params={params}/><Dock /></div>
  )
}
