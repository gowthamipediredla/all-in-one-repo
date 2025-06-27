import React, { useState, useRef, useEffect } from "react";
// chekc some issue
export const useThrottle = (value, delay = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const flag = useRef(true);
  const timer = useRef();
  useEffect(() => {
    if (flag.current) {
      setThrottledValue(value);
      flag.current = false;
      timer.current = setTimeout(() => {
        flag.current = true;
      }, delay);
    }
  }, [value, delay]);
  return throttledValue;
};
