import React, { useState, useMemo } from "react";
import "./TicTacToe.css";
export const TitTacToe = () => {
  const [isNextXMove, setIsNextMove] = useState(true);
  const gridSize = 3;
  const [inputArr, setInputArr] = useState(
    new Array(gridSize * gridSize).fill("")
  );
  const getStyle = () => ({
    display: "grid",
    gridTemplateColumns: `repeat(${gridSize},100px)`,
    gridTemplateRows: `repeat(${gridSize},100px)`,
  });

  const WinningComb = useMemo(() => {
    const n = gridSize;
    const combo = [];
    const diag1 = [];
    const diag2 = [];
    for (let i = 0; i < n; i++) {
      const rows = [];

      for (let j = 0; j < n; j++) {
        rows.push(i * n + j);
      }
      combo.push(rows);
    }
    for (let i = 0; i < n; i++) {
      const cols = [];

      for (let j = 0; j < n; j++) {
        cols.push(j * n + i);
      }
      combo.push(cols);
    }

    for (let i = 0; i < n; i++) {
      diag1.push(i * n + i);
    }
    for (let i = 0; i < n; i++) {
      diag2.push(i * n + (n - i - 1));
    }
    combo.push(diag1);
    combo.push(diag2);
    return combo;
  }, [gridSize]);

  const calculateWinner = () => {
    for (let combo of WinningComb) {
      const [a] = combo;
      const value = inputArr[a];
      debugger;
      if (value && combo.every((val) => inputArr[val] === value)) return value;
      return null;
    }
  };

  const winner = calculateWinner();
  console.log({ winner, WinningComb });
  const changeHandler = (e, index) => {
    if (winner || inputArr[index]) return;
    const copy = [...inputArr];

    debugger;
    copy[index] = isNextXMove ? "X" : "O";
    console.log(copy);
    setIsNextMove((prev) => !prev);
    setInputArr(copy);
  };
  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div>winner:{winner}</div>
      <div style={getStyle()}>
        {inputArr.map((grid, i) => (
          <div className="grid" onClick={(e) => changeHandler(e, i)}>
            {grid}
          </div>
        ))}
      </div>
    </div>
  );
};
