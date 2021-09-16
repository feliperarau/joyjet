import './index.scss';

const SolidButton = (props) => {
  return (
    <a className="_button btn btn-primary" href={props.href}>
      {props.label}
    </a>
  );
};

export default SolidButton;
