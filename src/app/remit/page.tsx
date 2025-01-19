'use client';

import Buttons from "@/components/remit/Buttons";
import Keypad from "@/components/remit/Keypad";
import Money from "@/components/remit/Money";

const Remit = () => {
  return (
    <div className="flex flex-col flex-1">
      <Money />
      <Keypad />
      <Buttons />
    </div>
  )
};

export default Remit;