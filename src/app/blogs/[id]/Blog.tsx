"use client"
import React from 'react'

export default function Blog({params}:{params:{id:string}}) {
  return (
    <div>Blog {params.id}</div>
  )
}
