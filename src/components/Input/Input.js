import React, { useState } from "react";
import { useDebounce } from "../../custom-hooks/useDebounce";

export const Input = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input type="search" value={value} onChange={changeHandler} />
      <div>{debouncedValue}</div>
    </div>
  );
};
