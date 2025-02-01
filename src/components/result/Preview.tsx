'use client';

import useStore from "@/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

import KB from '@/assets/kb.webp';
import KAKAO from '@/assets/kako.webp';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Preview = () => {
  const { target, money } = useStore();
    const router = useRouter();

  return (
    <div className="relative flex flex-1 justify-center items-center gap-4 flex-col">
      <span 
        className="absolute top-0 left-0 cursor-pointer" 
        onClick={() => router.back()}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </span>
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