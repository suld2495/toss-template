'use client';

import useStore from "@/store";
import { moneyUtil } from "@/util/number-util";

const Money = () => {
  const { money } = useStore();

  return (
    <div className="money flex flex-1 flex-col items-center justify-center">
      <span className=" text-4xl font-bold">{money.toLocaleString()} 원</span>
      <span className="h-5 text-sm mt-2">{!!money && `${moneyUtil(money)} 원`}</span>
    </div>
  )
};

export default Money;