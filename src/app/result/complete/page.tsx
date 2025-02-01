import RemitComplete from "@/components/result/RemitComplete";
import TargetInfo from "@/components/result/TargetInfo";
import Link from "next/link";

const Complete = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <RemitComplete />
      <div>
        <TargetInfo />
        <Link className="block text-center w-full bg-blue-500 text-white py-4 rounded-xl text-sm mt-5" href="/">확인</Link>
      </div>
    </div>
  )
};

export default Complete;