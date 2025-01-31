'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useRouter } from "next/navigation";

interface KeywordProps {
  keyword: string;
}

const Keyword = ({ keyword = '' }: KeywordProps) => {
  const [value, setValue] = useState(keyword);
  const router = useRouter();

  const search = () => {
    router.replace(`/remit/contact?keyword=${value}`);
  }

  return (
    <div className="rounded-xl bg-gray-100 p-3 w-full mt-2 flex items-center gap-2">
      <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      <input 
        className="w-full text-sm bg-transparent outline-none" 
        placeholder="연락처를 검색하거나 입력할 수 있습니다."
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && search()}
      />
    </div>
  );
};

export default Keyword;