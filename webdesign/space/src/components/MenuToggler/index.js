const MenuToggler = (props) => {
  const controls = props.target.replace('#', '');

  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={props.target}
      aria-controls={controls}
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export default MenuToggler;
