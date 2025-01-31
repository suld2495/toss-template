'use client';

import useStore from "@/store";
import Image from "next/image";

import KB from '@/assets/kb.webp';
import KAKAO from '@/assets/kako.webp';

const Preview = () => {
  const { target, money } = useStore();

  return (
    <div className="flex flex-1 justify-center items-center gap-4 flex-col">
        <div className="profile inline-flex rounded-full overflow-hidden w-20 h-20 relative">
          <Image src={target.type === 'KB' ? KB : KAKAO} alt={target.type} fill />
        </div>
      <p className="text-2xl font-bold text-center">
        {target.name}님께<br/>
        {money.toLocaleString()}원을 보냅니다.
      </p>
      <p className="text-[#3d8bf7] text-sm font-bold">{target.account}</p>
      <p className="bg-gray-100 rounded-lg text-xs text-[#4f5865] py-2 px-3 font-bold">받는 분 통장 표시 : 김토스</p>
    </div>
  )
};

export default Preview;