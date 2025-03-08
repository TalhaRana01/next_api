import { NextResponse } from "next/server";
import db from "@/lib/dbConnection"; // Adjust the path based on where you saved it
import Contact from "@/models/contact";

export async function POST(req) {
  try {
    // Connect to MongoDB first
    await db();

    // Parse the request body
    const { fullname, email, message } = await req.json();

    // Log the received data
    console.log("Received form data:", { fullname, email, message });

    // Create and save the contact
    const newContact = new Contact({
      fullname,
      email,
      message,
    });

    await newContact.save();

    // Return success response
    return NextResponse.json({
      message: "Success",
      msg: "Form submitted successfully",
    });
  } catch (error) {
    console.error("API route error:", error);

    // Handle duplicate key error (email already exists)
    if (error.code === 11000) {
      return NextResponse.json(
        {
          message: "Error",
          msg: "This email has already been used",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Error",
        error: error.message,
        msg: "Something went wrong with your submission",
      },
      { status: 500 }
    );
  }
}
