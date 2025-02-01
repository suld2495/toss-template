import { db } from "@/services/account";
import { NextResponse } from "next/server"

export const GET = async () => {
  const recent = await db.fetchRecentList();

  return NextResponse.json(recent);
}