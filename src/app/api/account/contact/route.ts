import { fetchContactList } from "@/services/account";
import { NextResponse } from "next/server"

export const GET = async () => {
  const contact = await fetchContactList();

  return NextResponse.json(contact);
}