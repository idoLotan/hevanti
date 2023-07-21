import React from "react";
import Select from "react-select";

{
  /* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" className="bg-gray-50 border w-20 h-10 rounded-lg text-[#FF7848]">
  <option selected>א-ג</option>
  <option value="US">ד-ו</option>
  <option value="CA">ז</option>
  <option value="FR">ח</option>
  <option value="DE">ט</option>
  <option value="CA">י</option>
  <option value="FR">יא</option>
  <option value="DE">יב</option>
</select> */
}

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "10px",
    borderColor: "#ccc",
    boxShadow: "none",
    width: "100px",
  
    color: "#FF7848",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.isFocused ? "rotate(180deg)" : "rotate(0deg)",
    color: "#FF7848",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "default", // Disable cursor on option hover
  }),
};

const options = [
    { value: "1", label: "א-ג" },
    { value: "2", label: "ד-ו" },
    { value: "3", label: "ז" },
    { value: "4", label: "ח" },
    { value: "5", label: "ט" },
    { value: "6", label: "י" },
    { value: "7", label: "יא" },
    { value: "8", label: "יב" },
  ];
  
const CustomSelect = () => {
  return (
    <div className="select-container text-[#FF7848] text-right">
      <Select
        options={options}
        styles={customStyles}
        isSearchable={false}
        placeholder="א-ג"
      />
    </div>
  );
};

export default CustomSelect;
