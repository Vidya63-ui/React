import React from 'react'
import { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChnage,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {

  const amountInputId = useId()

  const handleChange = (e) => {
    console.log(e.target.value)
    onCurrencyChnage && onCurrencyChnage(e.target.value)
  }

  return (
   <div className={`bg-white p-4 rounded-xl text-sm flex shadow-md border border-gray-100 ${className}`}>
  <div className="w-1/2 pr-3">
    <label htmlFor={amountInputId} className="text-gray-500 mb-2 block font-medium">
      {label}
    </label>
    <input
      id={amountInputId}
      className="outline-none w-full bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 transition"
      type="number"
      placeholder="Amount"
      disabled={amountDisable}
      value={amount}
      onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
    />
  </div>

  <div className="w-1/2 text-right">
    <p className="text-gray-500 mb-2">Currency Type</p>
    <select
      className="w-full rounded-lg px-3 py-2 bg-gray-50 border border-gray-200 cursor-pointer outline-none focus:ring-2 focus:ring-blue-400 transition"
      value={selectCurrency}
      onChange={handleChange}
      disabled={currencyDisable}
    >
      {currencyOptions.map((currency) => (
        <option key={currency} value={currency}>
          {currency.toUpperCase()}
        </option>
      ))}
    </select>
  </div>
</div>
  );
}

export default InputBox;