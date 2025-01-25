import { NextResponse } from "next/server"

export const GET = () => {
  const phones = [
    {
      name: "오빠",
      account: "798-823552-93-695",
      type: "KB"
    },
    {
      name: "친구1",
      account: "3333-93-0740142",
      type: "KAKAO"
    }
  ];

  return NextResponse.json(phones);
}