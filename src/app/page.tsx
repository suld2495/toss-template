import Divider from "@/components/common/Divider";
import Accounts from "@/components/main/Accounts";
import Loading from "@/components/main/Loading";
import Profile from "@/components/main/Profile";
import Reset from "@/components/main/Reset";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="h-full flex flex-col">
      <Reset />
      <Profile />
      <Divider className="my-5" />
      <Suspense fallback={<Loading />}>
        <Accounts />
      </Suspense>
    </main>
  )
}
