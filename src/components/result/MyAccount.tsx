'use client';

import useStore from "@/store";

const MyAccount = () => {
  const { source } = useStore();

  return (
    <div>
      <div>
        <h1 className="text-sm text-[#2f3947] font-bold mb-1">{source.account}에서 출금</h1>
        <p className="text-[13px] text-[#b1b5bc] font-bold">잔액 {source.balance.toLocaleString()} 원</p>
      </div>
    </div>
  );
};

export default MyAccount;