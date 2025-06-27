import React, { useEffect, useState, useRef, useCallback } from "react";
import "./InfiniteScrolling.css";
export const InfiniteScroll = () => {
  // https://openlibrary.org/search.json?q=${search}&page=${page}
  //https://openlibrary.org/search.json?page=${page}

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const observer = useRef();
  const callbackRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading && hasMore) {
        setPage((prev) => prev + 1);
      }
    });
    node && observer.current.observe(node);
  });
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://openlibrary.org/search.json?q=rings&page=${page}`
      );
      const res = await data.json();
      setData((prev) => [...prev, ...res.docs]);
      setHasMore(res.docs.length > 0);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div>
      <h2>Infinite Scroll</h2>
      <div>
        {data?.map((d, index) => (
          <div
            className="title"
            ref={index === data.length - 1 ? callbackRef : null}
            key={d.id}
          >
            {d.title}
          </div>
        ))}
      </div>
    </div>
  );
};
