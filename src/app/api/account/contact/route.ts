import { db } from "@/services/account";
import { NextResponse } from "next/server"

export const GET = async () => {
  const contact = await db.fetchContactList();

  return NextResponse.json(contact);
}