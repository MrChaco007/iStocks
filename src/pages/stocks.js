import React from "react";
import { Link } from "react-router-dom";

const Stocks = (props) => {
  const stocks = [
    { name: "Apple Inc.", symbol: "AAPL" },
    { name: "Microsoft Corporation", symbol: "MSFT" },
    { name: "Alphabet Inc.", symbol: "GOOG" },
    { name: "Facebook,Inc.", symbol: "FB" },
    { name: "Oracle Corporation", symbol: "ORCL" },
    { name: "Intel Corporation", symbol: "INTC" }
  ];
  return (
    <div className="stocks">
      {stocks.map((stock) => {
        const { name, symbol } = stock;
        return (
          <Link to={`/stock/${symbol}`} key={symbol}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Stocks;
