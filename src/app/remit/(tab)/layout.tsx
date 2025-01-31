import RemitHeader from "@/components/layout/RemitHeader";

interface RemitLayout {
  children: React.ReactNode;
}

const RemitLayout = async ({ children }: RemitLayout) => {
  return (
    <div className="h-full flex flex-col">
      <RemitHeader />
      <main className="flex flex-1">{children}</main>
    </div>
  )
};

export default RemitLayout;