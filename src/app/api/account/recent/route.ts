import { fetchRecentList } from "@/services/account";
import { NextResponse } from "next/server"

export const GET = async () => {
  const recent = await fetchRecentList();

  return NextResponse.json(recent);
}