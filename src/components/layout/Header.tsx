'use client';

import { usePathname } from "next/navigation";

const path: Record<string, string> = {
  '/remit': '송금',
}

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="text-center font-bold text-lg">
      {path[pathname]}
    </header>
  )
};

export default Header;