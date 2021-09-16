const SolidButton = (props) => {
  return (
    <a className="btn btn-primary" href={props.href}>
      {props.label}
    </a>
  );
};

export default SolidButton;
