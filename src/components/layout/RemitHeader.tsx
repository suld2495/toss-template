'use client';

import useStore from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styled from './style.module.css';

const path: Record<string, string> = {
  '/remit/recent': '최근',
  '/remit/accout': '계좌',
  '/remit/contact': '연락처',
};

const RemitHeader = () => {
  const { money } = useStore();
  const pathname = usePathname();

  return (
    <header className="text-center">
      <div className="font-bold mb-6">{money.toLocaleString()}원 받는 분 입력</div>
      <nav className="pb-1 border-b-[1px] border-gray-300 flex justify-center">
        <ul className="inline-flex gap-5">
          {Object.entries(path).map(([key, value]) => (
            <li 
              key={key} 
              className={`text-[#868d98] px-7 ${key === pathname ? styled.active: undefined}`}
            ><Link className="text-sm" href={key}>{value}</Link></li>  
          ))}
        </ul>
      </nav>
    </header>
  )
};

export default RemitHeader;