import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={8} valueB={3} />
      <Sub valueA={10} valueB={2} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <>
      <p>{valueA + valueB}</p>
    </>
  );
}

//hier werden valueA und valueB zusätzlich im Browser ausgegeben
function Sub({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <>
      <p>
        {valueA}-{valueB}={sum}
      </p>
    </>
  );
}
