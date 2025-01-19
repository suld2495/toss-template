'use client';

import useStore from "@/store";

interface NumberButtonProps {
  number: number;
}

const NumberButton = ({ number }: NumberButtonProps) => {
  const { append } = useStore();

  return (
    <button
      className="text-[#58606b] text-xl font-semibold py-4"
      onClick={() => append(number)}
    >{number}</button>
  );
};

const ClearButton = () => {
  const { clear } = useStore();

  return (
    <button 
      className="text-[#9499a0] text-sm font-semibold py-4"
      onClick={clear}
    >취소</button>
  )
};

const CancelButton = () => {
  const { pop } = useStore();

  return (
    <button
      className="text-[#9499a0] text-xl font-semibold py-4"
      onClick={pop}
    >←</button>
  )
};

interface KeyButtonProps {
  value: number | string;
}

const KeyButton = ({ value }: KeyButtonProps) => {
  switch (value) {
    case '취소':
      return <ClearButton />;
    case '←':
      return <CancelButton />;
    default:
      return <NumberButton number={value as number} />;
  }
};

const Keypad = () => {
  return (
    <div className="keypad grid grid-cols-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, '취소', 0, '←']
          .map((key) => <KeyButton key={key} value={key} />)}
    </div>
  );
};

export default Keypad;