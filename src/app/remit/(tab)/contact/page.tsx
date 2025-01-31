

import RemitLink from "@/components/remit/RemitLink";
import { fetchContactList } from "@/services/account";
import Keyword from "@/components/remit/Keyword";
import Profile from "@/components/remit/Profile";

interface ContactProps {
  searchParams: Promise<{ keyword: string }>
}

const Contact = async ({ searchParams }: ContactProps) => {
  const { keyword } = await searchParams;
  const contact = fetchContactList();
  const list = contact.filter(({ name }) => name.includes(keyword || ''));

  if (!list.length) {
    return (
      <div className="w-full flex justify-center items-center py-5">
        <p className="text-sm text-[#56606f]">등록된 연락처가 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col">
      <Keyword keyword={keyword} />
      <ul className="flex flex-col gap-6 py-5">
        {list.map((item, index) => (
          <li className="flex gap-4" key={index}>
            <Profile />
            <RemitLink {...item}>
              <div className="flex jutify-center flex-col">
                <p className="font-bold font-sm">{item.name}</p>
                <p className="text-xs text-[#56606f]">{item.account}</p>
              </div>
            </RemitLink>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Contact;