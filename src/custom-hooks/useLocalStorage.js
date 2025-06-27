import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // Get from localStorage then parse stored JSON or return initialValue
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// const [theme, setTheme] = useLocalStorage("theme", "light");

// return (
//   <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//     Switch to {theme === "light" ? "dark" : "light"} mode
//   </button>
// );
