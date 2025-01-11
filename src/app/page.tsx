import Divider from "@/components/common/Divider";
import Accounts from "@/components/main/Accounts";
import AccountLoading from "@/components/main/Loading";
import Profile from "@/components/main/Profile";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Profile />
      <Divider className="my-5" />
      <Suspense fallback={<AccountLoading />}>
        <Accounts />
      </Suspense>
    </main>
  )
}
