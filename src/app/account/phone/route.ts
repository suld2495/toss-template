import { NextResponse } from "next/server"

export const GET = () => {
  const phones = [
    {
      name: "오빠",
      phone: "010-2312-4921",
      account: "798-823552-93-695",
      type: "KB"
    },
    {
      name: "친구1",
      phone: "010-1239-8372",
      account: "3333-93-0740142",
      type: "KAKAO"
    },
    {
      name: "엄마",
      phone: "010-1298-8439",
      account: "3333-92-6888790",
      type: "KAKAO"
    },
    {
      name: "언니",
      phone: "010-0937-1271",
      account: "955-344744-13-606",
      type: "KB"
    },
    {
      name: "아빠",
      phone: "010-2801-0921",
      account: "3333-49-7338087",
      type: "KAKAO"
    }
  ];

  return NextResponse.json(phones);
}