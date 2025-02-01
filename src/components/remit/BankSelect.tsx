'use client';

import { Select, SelectItem } from "@heroui/select";
import { Input } from "@heroui/input";
import { useState } from "react";
import useStore from "@/store";
import { useRouter } from "next/navigation";

const bank = [
  {
    label: "KB 국민은행",
    type: "KB"
  },
  {
    label: "KAKO 뱅크",
    value: "3333-01-345-5823",
    type: "KAKAO"
  }
];

const BankSelect = () => {
  const { setTarget } = useStore();
  const router = useRouter();
  const [account, setAccount] = useState<{
    bank: string;
    account: string;
  }>({ bank: '', account: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAccount((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    if (!account.bank || !account.account) {
      alert('은행과 계좌번호를 입력해주세요.');
      return;
    }

    setTarget({
      id: 0,
      account: `${account.bank} ${account.account}`,
      name: `${account.bank} ${account.account}`,
      type: bank.find(({ label }) => label === account.bank)!.type
    });

    router.push('/result');
  };

  return (
    <div className="w-full mt-5 flex flex-col justify-between">
      <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-10">
        <Select 
          name="bank"
          className="max-w-full" 
          variant="underlined" 
          label="은행 선택" 
          value={account.bank} 
          onChange={handleChange}
        >
          {bank.map(({ label }) => (
            <SelectItem key={label}>{label}</SelectItem>
          ))}
        </Select>

        <Input 
          name="account"
          label="계좌번호" 
          placeholder="계좌번호 입력" 
          variant="underlined" 
          value={account.account} 
          onChange={handleChange}
        />
      </div>
      <button 
        className="w-full mt-5 py-3 bg-blue-500 text-white rounded-lg"
        onClick={handleSubmit}
      >
        다음
      </button>
    </div>
  )
};

export default BankSelect;