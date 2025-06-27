import React, { useState, useRef, useEffect } from "react";
import "./OTPInput.css";
export const OTPInput = () => {
  const OTP_DIGITS = 4;
  const [inputDigits, setInputDigits] = useState(
    new Array(OTP_DIGITS).fill("")
  );
  const ref = useRef([]);
  useEffect(() => {
    ref.current[0].focus();
  }, []);
  const changeHandler = (e, index) => {
    debugger;
    const value = e.target.value.trim();
    if (isNaN(value)) return;
    const inputCopy = [...inputDigits];
    inputCopy[index] = value.slice(-1);
    setInputDigits(inputCopy);
    if (value && index < OTP_DIGITS - 1) ref.current[index + 1].focus();
  };
  const handleKeyDown = (e, index) => {
    const value = e.target.value;
    console.log({ key: e.key });
    if (e.key === "Backspace") {
      if (!value && index !== 0) ref.current[index - 1].focus();
    }
  };
  return (
    <div>
      <h3>OTP Input</h3>
      <div className="otp-input">
        {inputDigits.map((val, index) => (
          <input
            type="text"
            value={val}
            key={index}
            onChange={(e) => changeHandler(e, index)}
            ref={(node) => (ref.current[index] = node)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        ))}
      </div>
    </div>
  );
};
