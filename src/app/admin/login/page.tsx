"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";



export default function Page() {
  const [loader,setLoader] = useState(false)
  async function Login(e:any) {
    e.preventDefault()
    setLoader(true)
    try {
      console.log('Login successful ')
    } catch (error) {
      
    } finally {
      // setLoader(false)
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <h1 className="text-2xl text-center font-Kanit">
          Login Page for Admin
        </h1>
        <div className="p-4">
          <form className="flex flex-col gap-4 border rounded-md p-8" onSubmit={Login}>
            <div className="flex items-center gap-2">
              <Label className="text-2xl"><MdOutlineMail/></Label>
              <Input className="lowercase placeholder:normal-case" placeholder="Enter email" />
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <Label className="text-2xl"><CiLock/></Label>
              <Input type="password" placeholder="Enter password" />
            </div>
            <Separator />
            <Button type="submit" className="m-auto" variant={'outline'}>{loader ? <ImSpinner3 className="animate-spin"/> : 'Login'}</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
