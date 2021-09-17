import React, { useEffect, useRef } from 'react';

import MenuItem from '../MenuItem';
import './index.scss';

const Menu = ({ stateChanger, menuItems }) => {
  const menu = useRef();

  useEffect(() => {
    const menuElement = menu.current;

    const mobileOpen = () => {
      stateChanger(true);
    };

    const mobileClosed = () => {
      stateChanger(false);
    };
    menuElement.addEventListener('show.bs.collapse', mobileOpen);
    menuElement.addEventListener('hidden.bs.collapse', mobileClosed);

    return () => {
      menuElement.removeEventListener('show.bs.collapse', mobileOpen);
      menuElement.removeEventListener('hidden.bs.collapse', mobileClosed);
    };
  });

  return (
    <div
      className="_navigation collapse navbar-collapse d-lg-flex justify-content-end"
      id="navbarNav"
      ref={menu}
    >
      <ul className="navbar-nav">
        {menuItems.map(({ label, href, active }, i) => {
          return <MenuItem label={label} href={href} active={active} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
