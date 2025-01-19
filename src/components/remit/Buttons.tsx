import Link from "next/link";

const Buttons = () => {
  return (
    <div className="mt-7">
      <Link 
        className="block text-center w-full text-[#fff] bg-[#3081f7] text-sm font-semibold py-4 rounded-2xl"
        href={`/remit/recent`}
      >보내기</Link>
    </div>
  )
};

export default Buttons;