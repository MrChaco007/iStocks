import React from "react";

const Stock = (props) => {
  const apiKey = "1a8605f1ce201388f041375c31b12d58";
  const symbol = props.match.params.symbol;
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;
  const [stock, setStock] = React.useState(null);
  const getStock = async () => {
    const response = await fetch(url);
    console.log("response", response);
    const data = await response.json();
    console.log("data", data);
    setStock(data);
  };

  React.useEffect(() => {
    getStock();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h3>Name: {stock[0].companyName}</h3>
        <h3 className="price">Price: ${stock[0].price}</h3>
      </div>
    );
  };

  const backToStocks = () => {
    props.history.push("/stocks");
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      <h2 className="return" onClick={backToStocks}>
        Go back to list of stocks
      </h2>
      {stock ? loaded() : loading()}
    </div>
  );
};

export default Stock;
