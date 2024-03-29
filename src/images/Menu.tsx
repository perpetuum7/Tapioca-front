interface Props {
  className?: string;
}

const Menu = ({ className }: Props) => (
  <svg
    viewBox="0 0 1000 1000"
    xmlSpace="preserve"
    height="52px"
    width="60px"
    className={className}
  >
    <path
      d="M875.5 447h-730c-29.42 0-53.5-24.07-53.5-53.5 0-29.42 24.07-53.5 53.5-53.5h730c29.42 0 53.5 24.07 53.5 53.5S904.93 447 875.5 447z"
      style={{
        fill: "#73ddda",
      }}
    />
    <path
      d="m475.74 218.33 22.95-69.3c9.25-27.93 39.67-43.22 67.6-33.97 27.93 9.25 43.22 39.67 33.97 67.6l-22.95 69.3c-9.25 27.93-39.67 43.22-67.6 33.97-27.93-9.24-43.22-39.66-33.97-67.6z"
      style={{
        fill: "#46e0b0",
      }}
    />
    <path
      d="M804.5 645h-588c-29.42 0-53.5-24.07-53.5-53.5 0-29.42 24.07-53.5 53.5-53.5h588c29.42 0 53.5 24.07 53.5 53.5S833.93 645 804.5 645z"
      style={{
        fill: "#dfa68c",
      }}
    />
    <path
      d="M755.5 825h-490c-29.42 0-53.5-24.07-53.5-53.5 0-29.42 24.07-53.5 53.5-53.5h490c29.42 0 53.5 24.07 53.5 53.5S784.93 825 755.5 825z"
      style={{
        fill: "#fd9cfd",
      }}
    />
  </svg>
);

export default Menu;
