import { typeDB } from "@/services/account";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const type = searchParams.get('type') || '';

  const contact = await typeDB(type).fetchContactList();

  return NextResponse.json(contact);
}