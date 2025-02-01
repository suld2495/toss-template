'use client';

import { remitAction } from "@/services/action/remit";
import useStore from "@/store";

const Submit = () => {
  const { target: { id: targetId }, accountId, money } = useStore();
  
  const handleSubmit = (e: React.FormEvent) => {
    remitAction({
      myId: accountId,
      targetId,
      money,
    });

    e.preventDefault();
  };

  return(
    <form onSubmit={handleSubmit}>
      <button className="w-full bg-blue-500 text-white py-4 rounded-xl text-sm mt-5">보내기</button>
    </form>
  )
};

export default Submit;