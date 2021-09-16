import './index.scss';

const MenuToggler = (props) => {
  const controls = props.target.replace('#', '');

  return (
    <button
      className="_menu-toggler navbar-toggler collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={props.target}
      aria-controls={controls}
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="open-icon ei ei-icon_menu"></span>
      <span className="closed-icon ei ei-icon_close"></span>
    </button>
  );
};

export default MenuToggler;
