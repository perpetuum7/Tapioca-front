interface Props {
  selectedOption?: string;
  options: { id: string; children: string | JSX.Element }[];
  size?: string;
  selectItem?: (id: string) => void;
}
const GroupButton = ({ selectedOption, options, size, selectItem }: Props) => {
  const buttonClassName = ["button-group"].join(" ");

  return (
    <div className={buttonClassName}>
      {options.map(({ id, children }) => {
        const className = [
          "button-group--item",
          selectedOption === id ? "button-group--item-selected" : "",
          size ? `button-group--item-${size}` : "",
          selectItem ? "button-group--item-selectable" : "",
        ].join(" ");
        return (
          <button
            onClick={() => {
              if (selectItem) selectItem(id);
            }}
            className={className}
          >
            {children}
          </button>
        );
      })}
    </div>
  );
};

export default GroupButton;
