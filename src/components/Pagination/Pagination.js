import React, { useState, useEffect } from "react";
import "./Pagination.css";
function Pagination() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const PAGE_SIZE = 10;
  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const totalPages = Math.floor(data.length / PAGE_SIZE);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const res = await data.json();
    setData(res.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const changePage = (page) => {
    setPage(page - 1);
  };
  const prevHandler = () => {
    if (page !== 0) setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page !== totalPages - 1) setPage((page) => page + 1);
  };
  return (
    <div>
      <div>
        {data?.slice(start, end).map((product) => (
          <div>{product.title}</div>
        ))}
      </div>
      <div className="Pagination">
        <span className="page" onClick={prevHandler}>
          prev
        </span>
        {[...Array(totalPages).keys()].map((key) => (
          <span
            className="page"
            onClick={() => changePage(key + 1)}
            style={
              page === key ? { backgroundColor: "blue", color: "white" } : {}
            }
          >
            {key + 1}
          </span>
        ))}
        <span className="page" onClick={nextHandler}>
          next
        </span>
      </div>
    </div>
  );
}

export { Pagination };
