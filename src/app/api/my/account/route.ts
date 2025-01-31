import { fetchAccounts } from "@/services/account";
import { remit } from "@/services/action/remit";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const acounts = await fetchAccounts();
  return NextResponse.json(acounts);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { accountId, targetId, money } = body;

  const acounts = await fetchAccounts();
  const account = acounts.find((account) => account.id === accountId);
  
  if (!account) {
    return NextResponse.json({ error: "계좌가 존재하지 않습니다." }, { status: 404 });
  }

  if (account.balance < money) {
    return NextResponse.json({ error: "잔액이 부족합니다." }, { status: 400 });
  }

  remit({
    myId: accountId,
    targetId,
    money
  });
  
  return NextResponse.json({
    message: "SUCCESS"
  });
}