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
  await remitAccount(data.myId, data.money);
  await addRecent(data.targetId);
}

export const remitAction = async (data:  RemitProps) => {
  remit(data);

  revalidatePath("/");
  redirect("/result/complete");
};