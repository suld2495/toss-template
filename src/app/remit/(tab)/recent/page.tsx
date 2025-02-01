import { innderDB } from "@/services/account";

import RemitLink from "@/components/remit/RemitLink";
import Profile from "@/components/remit/Profile";
import Bookmark from "@/components/remit/Bookmark";

const Recent = async () => {
  const recent = await innderDB.fetchRecentList();

  if (!recent.length) {
    return (
      <div className="w-full flex justify-center items-center py-5">
        <p className="text-sm text-[#56606f]">최근 사용한 계좌가 없습니다.</p>
      </div>
    )
  }

  return (
    <ul className="w-full flex flex-col gap-6 py-5">
      {recent.map((item, index) => (
        <li className="flex gap-4" key={index}>
          <Profile />
          <RemitLink {...item}>
            <div className="flex jutify-center flex-col">
              <p className="font-bold font-sm">{item.name}</p>
              <p className="text-xs text-[#56606f]">{item.account}</p>
            </div>
          </RemitLink>
          <Bookmark id={item.id} bookmark={item.bookmark} />
        </li>
      ))}
    </ul>
  )
};

export default Recent;