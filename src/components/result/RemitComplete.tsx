'use client';

import useStore from "@/store";
import Image from "next/image";

import KB from '@/assets/kb.webp';
import KAKAO from '@/assets/kako.webp';

const RemitComplete = () => {
  const { target, money } = useStore();

  return (
    <div className="flex flex-1 justify-center items-center gap-4 flex-col">
      <div className="profile inline-flex rounded-full overflow-hidden w-20 h-20 relative">
        <Image src={target.type === 'KB' ? KB : KAKAO} alt={target.type} fill />
      </div>
      <p className="text-2xl font-bold text-center">
        {money.toLocaleString()}원<br/> 송금 완료
      </p>
    </div>
  )
};

export default RemitComplete;