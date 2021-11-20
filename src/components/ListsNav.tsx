import React from 'react';

import NavLink from './NavLink';

const ListsNav = () => {
  return (
    <div>
      <ul className="flex flex-wrap text-xl">
        <NavLink href="/" icon="home" title="Home" />
        <NavLink href="/lists/anime/" icon="key" title="Anime" />
        <NavLink href="/lists/avn/" icon="key" title="AVN" />
        <NavLink href="/lists/fansly/" icon="key" title="Fansly" />
        <NavLink
          href="/lists/instagram/"
          icon="help-circle"
          title="Instagram"
        />
        <NavLink href="/lists/pornhub/" icon="key" title="Pornhub" />
        <NavLink href="/lists/twitter/" icon="key" title="Twitter" />
      </ul>
    </div>
  );
};

export default ListsNav;
