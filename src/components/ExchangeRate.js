import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";

const ExchangeRate = () => {
  const [currency1, setCurrency1] = useState();
  const [currency2, setCurrency2] = useState();
  const [amount, setAmount] = useState();
  const [currencyOptions, setCurrencyOptions] = useState([]);
  // const [rate, setRate] = useState();
  const [output, setOutput] = useState(0);

  // console.log(rate);
  //fetch data from api endpoint using axios
  const key = "0e04a2849f-29c0059ea8-r3uoa8";

  //using axios to make api call and get required data
  useEffect(() => {
    Axios.post(`https://api.fastforex.io/fetch-all?api_key=${key}`)
      .then((res) => res.data)
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.results)]);
        const initialCurrency = Object.keys(data.results)[0];
        setCurrency1(data.base);
        setCurrency2(initialCurrency);
      });
  }, []);

  //function to change currency
  const onChangeCurrency = (e) => {
    setCurrency1(e.target.value);
};
  const onChangeCurrency2 = (e) => {
    setCurrency2(e.target.value);
};

//function to get the user amount inputted
const amountHandler = (e) => {
    setAmount(e.target.value)
}

//functiontohandleconvertion
const HandleConversion = () => {
  Axios.get(`https://api.fastforex.io/convert?from=${currency1}&to=${currency2}&amount=${amount}&api_key=${key}`).then(res=>{
    const output = res.data.result[currency2]
    setOutput(output)
  })
}


  return (
    <div>
      <h1 style={{color: 'whitesmoke', paddingTop: '25px'}}>CurrencyApp</h1>
      <Card
        currencyOptions={currencyOptions}
        currency1={currency1}
        currency2={currency2}
        onChangeCurrency={onChangeCurrency}
        onChangeCurrency2={onChangeCurrency2}
        amount={amountHandler}
        convert={HandleConversion}
        output={output}
      />
    </div>
  );
};

export default ExchangeRate;
