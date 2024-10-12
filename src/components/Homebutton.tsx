import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HomeButton: React.FC = () => {
  return (
    <Link href="/" passHref>
      <button className="flex items-center p-4 cursor-pointer border-none bg-transparent text-blue-600 text-xl">
        <FontAwesomeIcon icon={faHome} className="mr-2 h-6 pb-1" />
        Home
      </button>
    </Link>
  );
};

export default HomeButton;
