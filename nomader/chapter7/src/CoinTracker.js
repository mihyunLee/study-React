import { useEffect, useState } from "react";

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState("");

  // 최초 1회만 실행
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=500")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChangeMoney = (event) => {
    setMoney(event.target.value);
  };
  const onChangeSelect = (event) => {
    setSelectedCoin(event.target[event.target.selectedIndex]);
  };

  return (
    <div>
      <h1>The Coins! ({coins.length} coins)</h1>
      <h2>Please enter the amount of money you have</h2>
      <input value={money} onChange={onChangeMoney} type="number" />$
      <p>{loading ? <strong>Loading...</strong> : null}</p>
      <select onChange={onChangeSelect}>
        <option>Select Coin</option>
        {coins.map((coin) => (
          <option key={coin.id} value={`${coin.name} (${coin.symbol})`}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <h3>
        You can get{" "}
        <span style={{ color: "tomato" }}>
          {money === 0 || money / selectedCoin.text.split(" ").slice(-2)[0]}
          {selectedCoin.value === "Select Coin" || selectedCoin.value}
        </span>
      </h3>
    </div>
  );
};

export default CoinTracker;
