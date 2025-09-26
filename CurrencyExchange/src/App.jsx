import { useState } from 'react'
import { InputBox } from './components'
import useCurrency from './hooks/useCurrency'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd") 
  const [to, setTo] = useState("inr") 
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
   const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div
  className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat text-black"
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  }}
>
  <div className="w-full">
    <div className="w-full max-w-md mx-auto border border-gray-200 rounded-2xl p-6 shadow-xl backdrop-blur-md bg-white/40">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        {/* From input */}
        <div className="w-full mb-4">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChnage={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>

        {/* Swap button */}
        <div className="relative w-full flex justify-center my-3">
          <button
            type="button"
            className="border-2 border-white rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 shadow-md hover:scale-105 transition-transform"
            onClick={swap}
          >
            ⬆⬇ Swap
          </button>
        </div>

        {/* To input */}
        <div className="w-full mb-6">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChnage={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
        </div>

        {/* Convert button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-xl shadow-lg font-semibold hover:scale-[1.02] transition-transform"
        >
          Convert {from.toUpperCase()} ➝ {to.toUpperCase()}
        </button>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default App
