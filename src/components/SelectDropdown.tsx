import { useRef, useState, useEffect } from "react";
import Chevron from "@/images/Chevron";
import FurucomboTokenImage from "@/components/furucombo/FurucomboTokenImage";

interface Props {
  selectedOption?: string;
  label?: string;
  options?: string[];
  selectOption: (op: string) => void;
}

const SelectDropdown = ({
  selectedOption,
  label,
  options,
  selectOption,
}: Props) => {
  const dropdownMenuElement = useRef();
  const dropdownMenuContent = useRef();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // this function watches for key presses to make sure some behaviors happen
    // if ESC (27) is pressed, we dismiss the dropdown
    const _detectKey = (event: KeyboardEvent) => {
      if (!isOpen) return;
      const key = event.which || event.keyCode;
      // esc press, dismiss modal
      if (isOpen && key === 27) {
        setIsOpen(false);
      }
    };

    const _handleClick = (event: any) => {
      if (!isOpen) return;
      // no action on disabled links
      const isDisabled = event.target.getAttribute("data-disabled") || false;
      if (isDisabled) return;

      if (event.target === dropdownMenuElement.current) {
        return;
      }

      setTimeout(() => setIsOpen(false), 0);
    };

    window.addEventListener("keydown", _detectKey, false);
    document.body.addEventListener("click", _handleClick, true);

    return () => {
      window.removeEventListener("keydown", _detectKey, false);
      document.body.removeEventListener("click", _handleClick, true);
    };
  });

  const dropdownClass = [
    "absolute",
    "rounded",
    "shadow",
    "transition-all",
    "origin-top",
    "mt-8",
    "z-10",
    "w-44",
    "overflow-y-auto",
    "max-h-40",
    isOpen ? "opacity-1 scale-x-1 scale-y-1" : "opacity-0 scale-x-1 scale-y-0",
  ]
    .filter(Boolean)
    .join(" ");

  const buttonClass = ["w-full", "flex", "items-center", "justify-between"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative flex">
      <button
        ref={dropdownMenuElement.current}
        onClick={() => setIsOpen((prev) => !prev)}
        className={buttonClass}
      >
        <span className="leading-6">{selectedOption || label}</span>
        <Chevron direction={isOpen ? "down" : "up"} className="ml-2 mb-0.5" />
      </button>
      <div className={dropdownClass} ref={dropdownMenuContent.current}>
        {options?.map((op) => (
          <button
            className={`pl-2 py-1 flex items-center w-full ${
              selectedOption === op
                ? "bg-zinc-700"
                : "bg-zinc-600 hover:bg-zinc-700"
            }`}
            onClick={() => {
              selectOption(op);
              setIsOpen(false);
            }}
            key={op}
          >
            <FurucomboTokenImage token={op} width={20} />
            <span className="ml-2">{op}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectDropdown;
