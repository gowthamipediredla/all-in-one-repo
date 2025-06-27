import React, { useState, useEffect } from "react";
import { MultiProgressBar } from "./components/MultiProgressBar/MultiProgressBar";
import { OTPInput } from "./components/OTPInput/OTPInput";
import { ProgressBar } from "./components/SingleProgressBar/SingleProgressBar";
import { Modal } from "./components/Modal/Modal";
import "./styles.css";
import { Toast } from "./components/Toast/Toast";
import { Pagination } from "./components/Pagination/Pagination";
import { InfiniteScroll } from "./components/InfiniteScrolling/InfiniteScrolling";
import { Input } from "./components/Input/Input";
import { TitTacToe } from "./components/TicTacToeN/TicTacToe";
import { EnhancedHOC, HocUse } from "./components/HOC/HocUse";
import { StateComp } from "./components/StateComp.js/StateComp";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Academy</h1> */}
      {/* <ProgressBar /> */}
      {/* <MultiProgressBar /> */}
      {/* <OTPInput /> */}
      {/* <Modal /> */}
      {/* <Toast /> */}
      {/* <Pagination /> */}
      {/* <InfiniteScroll /> */}
      {/* <Input /> */}
      {/* <TitTacToe /> */}
      {/* <EnhancedHOC title="Admin Dashboard" /> */}
      <StateComp />
    </div>
  );
}
