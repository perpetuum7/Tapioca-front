
interface Props {
  children: JSX.Element | string;
  color?: string;
  size?: string;
  customClassName?: string;
}

const Button = ({
  children,
  color,
  size,
  customClassName,
  ...htmlProps
}: Props) => {
  const className = [
    "button",
    color ? `button--${color}` : "",
    size ? `button--${size}` : "",
    customClassName,
  ].join(" ");

  return (
    <button className={className} {...htmlProps}>
      {children}
    </button>
  );
};

export default Button;
