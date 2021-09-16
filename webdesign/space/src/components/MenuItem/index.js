import './index.scss';

const MenuItem = (props) => {
  var itemClass = 'nav-link';
  itemClass += props.active ? ' active' : '';

  return (
    <li className="_menu-item nav-item">
      <a className={itemClass} aria-current="page" href={props.href}>
        {props.label}
      </a>
    </li>
  );
};

export default MenuItem;
