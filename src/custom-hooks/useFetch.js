import React, { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    const controller = new AbortController();
    try {
      setIsLoading(true);
      const data = await fetch(url, { signal: controller.signal });
      const res = await data.json();
      setData(res.docs);
    } catch (error) {
      if (error.name !== "AbortError") setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { hasError, isLoading, data };
};
