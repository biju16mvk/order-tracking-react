import "./Label.css";

const Label = props => {
  const classNames = `label ${props.className}`;
  return <p className={classNames}>{props.children}</p>;
};

export default Label;
