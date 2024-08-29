import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connect } from "@/config/database";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

connect();

export async function POST (req:NextRequest) {
  try {
    const reqData = await req.json();
    const { name,username,email,password } = reqData;
    if (!name ||!username ||!email ||!password) {
      return NextResponse.json({ message: "Please provide all fields" }, { status: 400 });
    }
    const exist = await User.findOne({$or:[{email:email,username:username}]})
    if(exist) {
      return NextResponse.json({ message: "Email or Username already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, username, email, password:hashedPassword });
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