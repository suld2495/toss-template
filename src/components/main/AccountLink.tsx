'use client';

import useStore from "@/store";
import Link from "next/link";


interface AccountLinkProps {
  accountId: number;
  account: string;
  balance: number;
} 

const AccountLink = ({ accountId, account, balance }: AccountLinkProps) => {
  const { saveAccountId, setSource } = useStore();

  const handleClick = () => {
    saveAccountId(accountId);
    setSource(account, balance)
  }

  return (
    <div className="h-8">
      <Link 
        className="h-full inline-flex items-center px-[12px] text-sm rounded-sm bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
        href={`/remit`}
        onClick={handleClick}
      >송금</Link>
    </div>
  )
};

export default AccountLink;