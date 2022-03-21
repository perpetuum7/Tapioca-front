interface Props {
  className?: string;
  direction?: string;
}

const Chevron = ({ className = "", direction = "right" }: Props) => (
  <svg
    width={14}
    height={14}
    fill="currentColor"
    className={[
      className,
      direction === "down" ? "-rotate-90" : "",
      direction === "up" ? "rotate-90" : "",
    ].join(" ")}
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

export default Chevron;
