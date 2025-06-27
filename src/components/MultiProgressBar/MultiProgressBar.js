import React, { useState, useRef } from "react";
import { ProgressBar } from "../SingleProgressBar/ProgressBar";

export const MultiProgressBar = ({ duration = 3000 }) => {
  const [progressBars, setProgressBars] = useState([]);
  const lastPromiseRef = useRef(Promise.resolve());
  const handleConcurrent = () => {
    const id = Date.now() + Math.random();
    setProgressBars((prev) => [...prev, { id, progress: 0 }]);
    new Promise((res) => startProgressBar(id, res));
  };
  const handleSequential = async () => {
    const id = Date.now() + Math.random();
    setProgressBars((prev) => [...prev, { id, progress: 0 }]);
    lastPromiseRef.current = lastPromiseRef.current.then(
      () => new Promise((res) => startProgressBar(id, res))
    );
  };

  const startProgressBar = (id, resolve) => {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        resolve();
        return;
      }
      width = width + 1;
      setProgressBars((pbars) =>
        pbars.map((bar) => (bar.id === id ? { ...bar, progress: width } : bar))
      );
    }, duration / 100);
  };
  return (
    <>
      <div>
        <button onClick={handleConcurrent}>add concurrent bar</button>
        <button onClick={handleSequential}>add sequential bar</button>
      </div>
      <div>
        {progressBars?.map((pbar) => (
          <ProgressBar key={pbar.id} progress={pbar.progress} />
        ))}
      </div>
    </>
  );
};
