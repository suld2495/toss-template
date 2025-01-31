import { fetchContactList } from "@/services/account";
import { NextResponse } from "next/server"

export const GET = () => {
  const contact = fetchContactList();

  return NextResponse.json(contact);
}