import { NextResponse } from "next/server";

export const GET = () => {
  const accounts = [
    {
      name: "KB 국민은행",
      account: "010-2312-4921",
      type: "KB"
    },
    {
      name: "KAKO 뱅크",
      account: "3333-01-345-5823",
      type: "KAKAO"
    }
  ];

  return NextResponse.json(accounts);
};