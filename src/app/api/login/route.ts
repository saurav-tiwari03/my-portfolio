import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connect } from "@/config/database";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

connect();

export async function POST (req:NextRequest) {
  try {
    const reqData = await req.json();
    const { email,password } = reqData;
    const user = await User.findOne({email})
    if(!user) {
      return NextResponse.json({ message: "Email not found" }, { status: 400 });
    }
    const check = await bcrypt.compare(password, user.password);
    if(!check) {
      return NextResponse.json({message:"Passwords incorrect"},{status: 400});
    }
    const payload = {
      id:user._id,
      name:user.name,
      email:user.email,
      username:user.username
    }
    let token = jwt.sign(payload,process.env.SALT!,{expiresIn:'1d'});
    const res = NextResponse.json({success:true,message:"User signned up successfully",token});
    res.cookies.set('token',token,{httpOnly:true})
    return res;
  } catch (error) {
    console.log('Error signing up user'); 
    console.log(error);
    return NextResponse.json({success:false,message:"Error while signing up user",error:error})
  }
}