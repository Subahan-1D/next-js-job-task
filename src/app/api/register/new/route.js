import userInfo from "../../../../../libs/models/user-model";
import { main } from "../../../../../libs/config/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  main();
  await userInfo.create(data);
  return NextResponse.json({ message: "ok " });
}
