const MenuItem = (props) => {
  var itemClass = 'nav-link';
  itemClass += props.active ? ' active' : '';

  return (
    <li className="nav-item">
      <a className={itemClass} aria-current="page" href={props.href}>
        {props.label}
      </a>
    </li>
  );
};

export default MenuItem;
