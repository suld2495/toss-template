import useStore from "@/store";

const Money = () => {
  const { money } = useStore();

  return (
    <div className="money flex flex-1 items-center justify-center text-4xl font-bold">
      {money.toLocaleString()} 원
    </div>
  )
};

export default Money;