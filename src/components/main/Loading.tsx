import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const AccountLoading = () => (
  <div className="flex items-center justify-center"><FontAwesomeIcon width={30} color="gray" icon={faSpinner} spin size="sm" /></div>
);

export default AccountLoading;