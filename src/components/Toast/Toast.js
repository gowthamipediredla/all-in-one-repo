import React, { useState, useEffect } from "react";
import "./Toast.css";
export const Toast = () => {
  const [showToast, setSHowToast] = useState(false);
  const [progress, setProgress] = useState(100);
  const showToastHandler = () => {
    setSHowToast(true);
    setProgress(100);
  };
  const duration = 3000;
  const int = 100; //interval
  const totalsteps = duration / int;
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextVal = prev - 100 / totalsteps;
        if (nextVal <= 0) {
          setSHowToast(false);
          clearInterval(interval);
          return 100;
        }
        return nextVal;
      });
    }, int);
    return () => clearInterval(interval);
  }, [showToast]);
  return (
    <div>
      <h3>Toast</h3>
      <button onClick={showToastHandler}>toast</button>
      {showToast && (
        <div className="toast">
          <div>Toast is successfully created</div>
          <div className="progress" style={{ width: progress + "%" }}></div>
        </div>
      )}
    </div>
  );
};
