import BookInfo from "../../../../../libs/models/bookInfo";
import { main } from "../../../../../libs/config/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  main();
  await BookInfo.create(data);
  return NextResponse.json({ message: "ok " });
}


