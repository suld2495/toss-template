import Image from "next/image";
import { innderDB } from "@/services/account";

import KB from '@/assets/kb.webp';
import KAKAO from '@/assets/kako.webp';
import AccountLink from "../main/AccountLink";

const Accounts = async () => {
  const accounts = await innderDB.fetchAccounts();
  const totalBalance = accounts
    .reduce((total, { balance }) => total + balance, 0)

  return(
    <div>
      <h1 className="flex justify-between font-bold items-center mb-5">
        <span className="text-lg text-black">계좌</span>
        <span className="total-balance text-sm text-gray-500">{totalBalance.toLocaleString()} 원</span>
      </h1>
      <ul className="flex flex-col gap-8">
        {accounts.map(({ id, name, balance, type }) => (
          <li key={id} className="account-container flex relative gap-4 h-8">
            <div className="profile inline-flex rounded-full overflow-hidden w-8 relative">
              <Image src={type === 'KB' ? KB : KAKAO} alt={type} fill />
            </div>
            <div className="info flex-1 flex justify-center flex-col gap-1">
              <span className="text-xs account-name text-gray-600">{name}</span>
              <span className="text-sm font-bold text-black">{balance.toLocaleString()} 원</span>
            </div>
            <AccountLink accountId={id} account={name} balance={balance} />
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Accounts;