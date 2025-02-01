'use client';

import useStore from "@/store";
import Link from "next/link";

const Buttons = () => {
  const { money } = useStore();

  const handleClick = (e: React.MouseEvent) => {
    if (money === 0) {
      alert('금액을 입력해주세요.');
      e.preventDefault();
      return;
    }
  }

  return (
    <div className="mt-7">
      <Link 
        className="block text-center w-full text-[#fff] bg-[#3081f7] text-sm font-semibold py-4 rounded-2xl"
        href={`/remit/recent`}
        onClick={handleClick}
      >보내기</Link>
    </div>
  )
};

export default Buttons;