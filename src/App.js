import React from "react";
import "./styles.css";

export default function App() {
  const valueA = 2;
  const valueB = 3;
  return (
    <div>
      <Sum valueA={valueA} valueB={valueB} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <div>
      <p>
        {valueA}+{valueB}={sum}
      </p>
    </div>
  );
}
