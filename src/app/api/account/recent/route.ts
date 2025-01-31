import { fetchRecentList } from "@/services/account";
import { NextResponse } from "next/server"

export const GET = () => {
  const recent = fetchRecentList();

  return NextResponse.json(recent);
}