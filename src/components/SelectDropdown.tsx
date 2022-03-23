import { useState } from "react";
import Chevron from "@/images/Chevron";

interface Props {
  selectedOption?: string;
  options?: string[];
  selectOption: (op: string) => void;
}

const SelectDropdown = ({ selectedOption, options, selectOption }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownClass = [
    "absolute",
    "rounded",
    "shadow",
    "transition-all",
    "origin-top",
    "mt-1",
    "z-10",
    "w-40",
    "overflow-y-auto",
    "max-h-40",
    isOpen ? "opacity-1 scale-x-1 scale-y-1" : "opacity-0 scale-x-1 scale-y-0",
  ]
    .filter(Boolean)
    .join(" ");

  const buttonClass = [
    "w-full",
    "flex",
    "items-center",
    "justify-between",
    "w-40",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative flex">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={buttonClass}
      >
        <span className="leading-6">{selectedOption}</span>
        <Chevron direction={isOpen ? "down" : "up"} className="ml-2 mb-0.5" />
      </button>
      <div className={dropdownClass}>
        {options?.map((op) => (
          <button
            className={`py-1 w-full ${
              selectedOption === op ? "bg-zinc-700" : "bg-zinc-600"
            }`}
            onClick={() => {
              selectOption(op);
              setIsOpen(false);
            }}
            key={op}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectDropdown;
