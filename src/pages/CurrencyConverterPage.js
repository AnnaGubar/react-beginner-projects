/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { Container } from "../components/Container";
import { Block } from "../components/Block";
import "../styles/currency-converter.scss";

export function CurrencyConverterPage() {
  // const [exchangeRate, setExchangeRates] = useState({});
  const exchangeRateRef = useRef({})

  const [selectedCurrency, setSelectedCurrency] = useState("UAH");
  const [convertedCurrency, setСonvertedCurrency] = useState("USD");

  const [selectedValue, setSelectedValue] = useState(0);
  const [convertedValue, setСonvertedValue] = useState(1);

  // получение данных по курсу валют
  useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      // .then((json) => setExchangeRates(json.rates))
      .then((json) => {exchangeRateRef.current= json.rates;
        onChangeСonvertedValue(1)
      })
      .catch((err) => console.warn(err));
  }, []);

  const onChangeSelectedValue = (value) => {
    const sum = value / exchangeRateRef.current[selectedCurrency];
    const result = sum * exchangeRateRef.current[convertedCurrency];
    
    setСonvertedValue(result === value ? value : result.toFixed(3));
    setSelectedValue(Number(value));
  };

  const onChangeСonvertedValue = (value) => {
    const result =
      (exchangeRateRef.current[selectedCurrency] / exchangeRateRef.current[convertedCurrency]) *
      value;

    setSelectedValue(result === value ? value : result.toFixed(3));
    setСonvertedValue(Number(value));
  };

  useEffect(() => {
    onChangeSelectedValue(selectedValue);
  }, [selectedCurrency]);

  useEffect(() => {
    onChangeСonvertedValue(convertedValue);
  }, [convertedCurrency]);

  return (
    <Container>
      <div className="CurrencyConverterPage">
        <Block
          currency={selectedCurrency}
          onChangeCurrency={setSelectedCurrency}
          value={selectedValue}
          onChangeValue={onChangeSelectedValue}
        />
        <Block
          value={convertedValue}
          currency={convertedCurrency}
          onChangeCurrency={setСonvertedCurrency}
          onChangeValue={onChangeСonvertedValue}
        />
      </div>
    </Container>
  );
}
