import { NextResponse } from "next/server";

export const GET = () => {
  const accounts = [
    {
      name: "KAKO 뱅크",
      type: "KAKAO"
    },
    {
      name: "농협은행",
      type: "NONG"
    },
    {
      name: "신한은행",
      type: "SINHAN"
    },
    {
      name: "케이뱅크",
      type: "KBANK"
    }
  ];

  return NextResponse.json(accounts);
};