import { NextResponse } from "next/server";

const dataUrl = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  const response = await fetch(dataUrl);
  const data = await response.json();
  return NextResponse.json(data);
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const response = await fetch(`${dataUrl}/${id}`);
  const data = await response.json();
  return NextResponse.json(data);
}
