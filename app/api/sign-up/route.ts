import { NextResponse } from "next/server";
import { DBConnect } from "@/app/lib/dbConnect";
import User from "@/app/models/User";

export async function POST(req: Request) {
  try {
    await DBConnect();
    // console.log("rre", await req.json());

    const { name, email, password, clerkId } = await req.json();


    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const newUser = await User.create({ name, email, password });

    return NextResponse.json({ message: "User registered", user: { name: newUser.name, email: newUser.email } }, { status: 201 });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
