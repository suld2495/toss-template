'use client';

import useStore from "@/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import styled from './style.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const path: Record<string, string> = {
  '/remit/recent': '최근',
  '/remit/account': '계좌',
  '/remit/contact': '연락처',
};

const RemitHeader = () => {
  const { money } = useStore();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="relative text-center">
      <span 
        className="absolute left-0 cursor-pointer" 
        onClick={() => router.push("/remit")}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </span>
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