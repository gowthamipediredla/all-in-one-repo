import React, { useEffect, useState } from "react";
import "./SingleProgressBar.css";
export const ProgressBar = ({ width, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextValue = prev + 1;
        if (nextValue <= 0) {
          clearInterval(interval);
          return 0;
        } else return nextValue;
      });
    }, duration / 100);
    return () => clearInterval(interval);
  }, [progress]);
  return <ProgressBar progress={progress} />;
};
