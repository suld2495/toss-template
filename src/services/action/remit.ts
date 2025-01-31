'use server';

import { redirect } from "next/navigation";
import { addRecent, remitAccount } from "../account";
import { revalidatePath } from "next/cache";

interface RemitProps {
  myId: number;
  targetId: number;
  money: number;
}

export const remit = async (data:  RemitProps) => {
  remitAccount(data.myId, data.money);
  addRecent(data.targetId);

  revalidatePath("/");
  redirect("/result/complete");
};