import { NextResponse } from "next/server";

const dataUrl = "https://jsonplaceholder.typicode.com/posts";

const API_KEY = process.env.API_KEY;

export async function GET() {
  const response = await fetch(dataUrl);
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(req) {
  try {
    const { title, body, userId } = await req.json();

    const res = await fetch(dataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
    });
    if (res.ok || res.status === 201) {
      const newData = await res.json();
      return NextResponse.json(newData);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error });
  }
}

export async function PUT(req) {
  const { title, body, userId, id } = await req.json();
  try {
    const res = await fetch(`${dataUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        body,
        userId,
      }),
    });
    if (res.ok || res.status === 201) {
      const updateData = await res.json();
      return NextResponse.json(updateData);
    }
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error });
  }
}
