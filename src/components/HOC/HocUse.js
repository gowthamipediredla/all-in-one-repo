import React from "react";
import { HOC } from "./HOC";
const HocUse = ({ authData, title }) => {
  console.log({ title });
  const { name, role } = authData;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{name}</h2>
      <h2>{role}</h2>
    </div>
  );
};

const EnhancedHOC = HOC(HocUse);
export { EnhancedHOC };
