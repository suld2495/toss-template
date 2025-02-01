import RemitHeader from "@/components/layout/RemitHeader";
import Loading from "@/components/main/Loading";
import { Suspense } from "react";

interface RemitLayout {
  children: React.ReactNode;
}

const RemitLayout = ({ children }: RemitLayout) => {
  return (
    <div className="h-full flex flex-col">
      <RemitHeader />
      <Suspense fallback={<Loading />}>
        <main className="flex flex-1">{children}</main>
      </Suspense>
    </div>
  )
};

export default RemitLayout;