'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faFullStar } from '@fortawesome/free-solid-svg-icons'
import { toggleBookmark } from "@/services/action/remit";

interface BookmarkProps {
  id: number;
  bookmark: boolean;
}

const Bookmark = ({ id, bookmark }: BookmarkProps) => {
  return (
    <div 
      className="flex items-center cursor-pointer"
      onClick={() => toggleBookmark(id)}
    >
      {
        bookmark ? (
          <FontAwesomeIcon width={20} icon={faFullStar} color="#6598e9" />
        ) : (
          <FontAwesomeIcon width={20} icon={faStar} color="#6598e9" />
        )
      }
    </div>
  )
};

export default Bookmark;
