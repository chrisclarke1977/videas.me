import React from 'react';

import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  icon: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, title, onClick }) => {
  return (
    <li className="mr-6">
      <Link href={href}>
        <a
          onClick={onClick}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-flex items-center"
        >
          <FeatherIcon className="w-6 h-6 mr-2" icon={icon} />
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
