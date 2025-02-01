'use client';

import useStore from "@/store";
import { today } from "@/util/date-util";

const TargetInfo = () => {
  const { target } = useStore();

  return (
    <div className="flex flex-col gap-5 mb-10">
      <p className="flex justify-between text-sm font-bold">
        <span className="text-[#9fa4ab]">받는분</span>
        <span className="text-[#525c6a]">{target.name}</span>
      </p>
      <p className="flex justify-between text-sm font-bold">
        <span className="text-[#9fa4ab]">날짜</span>
        <span className="text-[#525c6a]">{today()}</span>
      </p>
    </div>
  )
};

export default TargetInfo;