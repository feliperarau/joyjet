import MenuItem from '../MenuItem';

const Menu = (props) => {
  const menuItems = [
    {
      label: 'Blog',
      href: '/blog',
      active: false,
    },
    {
      label: 'Popular',
      href: '/popular',
      active: false,
    },
    {
      label: 'Archive',
      href: '/archive',
      active: false,
    },
    {
      label: 'About',
      href: '/about',
      active: false,
    },
  ];

  return (
    <div
      className="collapse navbar-collapse d-lg-flex justify-content-end"
      id="navbarNav"
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
