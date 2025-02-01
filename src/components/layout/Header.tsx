'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { usePathname, useRouter } from "next/navigation";

const path: Record<string, string> = {
  '/remit': '송금',
}

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="relative text-center font-bold text-lg">
      <span 
        className="absolute left-0 cursor-pointer" 
        onClick={() => router.push("/")}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </span>
      {path[pathname]}
    </header>
  )
};

export default Header;