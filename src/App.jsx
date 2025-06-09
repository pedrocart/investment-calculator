
import Header from "./Header";
import UserInput from "./UserInput";
import { useState } from "react";

function App() {
    const [initialInvestment, setInitialInvestment] = useState("")
    const [annualInvestment, setAnnualInvestment] = useState("")
    const [expectedReturn, setExpectedReturn] = useState("")
    const [duration, setDuration] = useState("")

    const handleInitialInvestmentChange = (event) => {
        setInitialInvestment(event.target.value)
    }
    const handleAnnualInvestmentChange = (event) => {
        setAnnualInvestment(event.target.value)
    }
    const handleExpectedReturnChange = (event) => {
        setExpectedReturn(event.target.value)
    }
    const handleDurationChange = (event) => {
        setDuration(event.target.value)
    }

  return (
    <main>
      <Header />
      <UserInput initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} handleInitialInvestmentChange={handleInitialInvestmentChange} handleAnnualInvestmentChange={handleAnnualInvestmentChange} handleExpectedReturnChange={handleExpectedReturnChange} handleDurationChange={handleDurationChange}  />
    </main>
  )
}

export default App
