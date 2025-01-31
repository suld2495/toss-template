import MyAccount from "@/components/result/MyAccount";
import Preview from "@/components/result/Preview";
import Submit from "@/components/result/Submit";

const Result = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <Preview />
      <div>
        <MyAccount />
        <Submit />
      </div>
    </div>
  )
};

export default Result;