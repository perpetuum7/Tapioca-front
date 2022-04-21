import React from "react";

const BUTTON_BASE_CLASS =
  "font-bebas-neue rounded-lg	border-4 text-lg px-4 disabled:border-zinc-500 disabled:text-zinc-500 disabled:cursor-not-allowed";

const BUTTON_COLOR_STYLES = {
  purple: "border-custom-purple",
  green: "border-custom-green",
  blue: "border-custom-blue",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClasses?: string;
  buttonColor?: "purple" | "green" | "blue";
  isLoading?: boolean;
}

const Button = ({
  children,
  customClasses = "",
  buttonColor = "green",
  isLoading = false,
  ...htmlAttributes
}: Props) => {
  const buttonClassName = [
    customClasses ? customClasses : null,
    BUTTON_BASE_CLASS,
    BUTTON_COLOR_STYLES[buttonColor],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClassName} {...htmlAttributes}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
