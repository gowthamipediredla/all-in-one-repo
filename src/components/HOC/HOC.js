import React, { useState, useEffect } from "react";

export const HOC = (WrappedComponent) => {
  return function NewComp(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [authData, setAuthData] = useState(true);
    useEffect(() => {
      // Simulate async fetch (e.g., authentication)
      setTimeout(() => {
        setAuthData({ name: "Gowthami", role: "Admin" });
        setIsLoading(false);
      }, 1000);
    }, []);
    if (isLoading) return "...isLoading";
    return <WrappedComponent authData={authData} {...props} />;
  };
};
