import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();
    const { email, password } = reqData;
    
    if (!email || !password) {
      return NextResponse.json({ message: "Please provide email and password" }, { status: 400 });
    }
    if(email == process.env.EMAIL && password == process.env.PASS){
      const res = NextResponse.json({ message: "Login to access Admin Panel", data: { email, password } });
      res.cookies.set("user", "true", {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        path: "/",
      });
      return res;
    } else {
      throw new Error('Invalid Password or Email')
    }
    
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
