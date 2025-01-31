'use client';

import useStore from "@/store";
import Link from "next/link";

interface RemitLinkProps {
  children: React.ReactNode;
  id: number;
  name: string;
  account: string;
  type: string;
}

const RemitLink = ({ children, ...target }: RemitLinkProps) => {
  const { setTarget } = useStore();

  return (
    <Link className="flex-1" href="/result" onClick={() => setTarget(target)} >
      {children}
    </Link>
  );
};

export default RemitLink;