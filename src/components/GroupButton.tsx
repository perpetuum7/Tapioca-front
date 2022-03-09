interface Props {
  selectedOption?: string;
  options: { id: string; children: string | JSX.Element }[];
  size?: string;
  selectItem?: (id: string) => void;
  noBackground?: boolean;
}
const GroupButton = ({
  selectedOption,
  options,
  size,
  selectItem,
  noBackground = false,
}: Props) => (
  <div
    className={`button-group ${
      noBackground ? "button-group--transparent" : ""
    }`}
  >
    {options.map(({ id, children }) => {
      const className = [
        "button-group--item",
        selectedOption === id ? "button-group--item-selected" : "",
        size ? `button-group--item-${size}` : "",
        selectItem ? "button-group--item-selectable" : "",
        noBackground ? "button-group--transparent" : "",
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

export default GroupButton;
