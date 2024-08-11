import React from 'react'

export default function page({params}:{params:{id:string}}) {
  return (
    <div>Blog ID : {params.id} </div>
  )
}
