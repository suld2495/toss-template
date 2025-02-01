import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = () => (
  <div className="flex-1 flex items-center justify-center"><FontAwesomeIcon width={30} color="gray" icon={faSpinner} spin size="2xl" /></div>
);

export default Loading;