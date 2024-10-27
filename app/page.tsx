"use client"
import { useState } from "react";

export default function Home() {

  const [result, setResult] = useState("")
  const [expression, setExpression] = useState("")

  const handleButtonClick = (value:any) =>{
    if (value === "=") {
      try{
        setResult (eval(expression.toString()))
      } catch (erro) {
        setResult("error")
      }
    } else if (value === "C") {
      setResult("")
      setExpression("")
    } else {
      setExpression((prevExpression) => prevExpression + value)

    }
  }

  const buttons= [
    '7', '8', '9' ,'/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ]
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <h1 className="text-4xl font-bold mb-10">CALCULATOR</h1>
      <div className="bg-white p-6 rounded-1g shadow-1g">
        <input type="text" className="w-full mb-2 text-3xl text-color-black-8 border-b-2 border-grey-400 focus: outline-none" 
        value={expression} readOnly 
        />
        
        <input type="text" className="w-full text-4xl font-bold mb-4 focus-outline"
        value={result}
        readOnly 
        />

        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) =>(
            <button
            //key= {btn} 
            onClick={()=> handleButtonClick(btn)}
            className="text-4xl bg-red-400 hover:bg-grey-400 p-2 rounded-1g"
            >
              {btn}

            </button>
          ))}

        </div>
        </div>
        
    </main>
  );
}
