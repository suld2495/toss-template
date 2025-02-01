'use server';

import { redirect } from "next/navigation";
import { db, innderDB } from "../account";
import { revalidatePath } from "next/cache";

interface RemitProps {
  myId: number;
  targetId: number;
  money: number;
}

export const remit = async (data:  RemitProps, api: boolean = true) => {
  if (api) {
    await db.remitAccount(data.myId, data.money);
    await db.addRecent(data.targetId);
  } else {
    await innderDB.remitAccount(data.myId, data.money);
    await innderDB.addRecent(data.targetId);
  }
}

export const remitAction = async (data:  RemitProps) => {
  remit(data, false);

  revalidatePath("/");
  redirect("/result/complete");
};

export const toggleBookmark = async (id: number) => {
  await innderDB.toggleBookmark(id);

  revalidatePath("/remit/recent");
};