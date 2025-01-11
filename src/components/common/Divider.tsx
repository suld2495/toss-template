interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => (
  <div className={`${className} h-[1px] bg-gray-200`} />
)

export default Divider;