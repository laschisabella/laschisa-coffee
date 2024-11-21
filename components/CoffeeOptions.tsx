"use client";

import React, { useState } from "react";
import { Check, X } from "@phosphor-icons/react";

interface CoffeeProps {
  options: string[];
}

interface CoffeeOptionsProps {
  coffee: CoffeeProps;
}

const CoffeeOptions: React.FC<CoffeeOptionsProps> = ({ coffee }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <div>
      <strong className="font-karla text-themeSecondary font-bold">
        Options:
      </strong>
      <ul className="flex gap-2">
        {coffee.options.map((option, index) => (
          <li
            key={index}
            className={`select-none cursor-pointer flex border px-3 py-px my-1 rounded-full max-w-max items-center font-bold  border-themeTitle gap-2 transition ${
              selectedOptions.includes(option)
                ? "bg-transparent text-themeTitle"
                : "bg-themeTitle text-white border-themeTitle"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            <div>
              {selectedOptions.includes(option) ? (
                <X
                  weight="bold"
                  className="border border-themeTitle rounded-full p-px"
                />
              ) : (
                <Check weight="bold" className="border rounded-full p-px" />
              )}
            </div>
            <div className="relative top-px">{option}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeOptions;
