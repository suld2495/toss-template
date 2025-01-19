import Header from "@/components/layout/Header";

interface RemitLayout {
  children: React.ReactNode;
}

const RemitLayout = async ({ children }: RemitLayout) => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="flex flex-1">{children}</main>
    </div>
  )
};

export default RemitLayout;