import React from "react";

export const ProgressBar = ({ progress }) => {
  return (
    <div className="progressbar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
