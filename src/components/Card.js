import React from "react";
import { CardBody, Form } from "./styles/CardStyles";

const Card = ({
  currencyOptions,
  currency1,
  currency2,
  onChangeCurrency,
  onChangeCurrency2,
  amount,
  convert,
  output
}) => {

  return (
    <CardBody>
      <Form>
        <h3>Amount</h3>
        <input type="text" placeholder="Enter the amount" onChange={amount} />
        <div>
          <select value={currency1} onChange={onChangeCurrency}>
            {currencyOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
          <select value={currency2} onChange={onChangeCurrency2}>
            {currencyOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      </Form>
          <button onClick={convert} disabled={!amount}>Convert</button>
          <h1>{`The exchange rate is ${output}`}</h1>
    </CardBody>
  );
};

export default Card;
