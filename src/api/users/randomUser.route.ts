import { NextResponse } from "next/server";
import { getRandomUsers } from "@/actions/user.action";

export async function GET() {
  try {
    const users = await getRandomUsers();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}