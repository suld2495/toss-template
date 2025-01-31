import Header from "@/components/layout/Header";
import Buttons from "@/components/remit/Buttons";
import Keypad from "@/components/remit/Keypad";
import Money from "@/components/remit/Money";

const Remit = () => {
  return (
    <div className="h-full flex-1 flex flex-col">
      <Header />
      <div className="flex flex-col flex-1">
        <Money />
        <Keypad />
        <Buttons />
      </div>
    </div>
  )
};

export default Remit;