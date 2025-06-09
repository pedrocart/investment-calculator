import { formatter } from "./util/investment";
import { useState } from "react";

export default function UserInput() {
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
        <div>
            <div id="user-input">
                <div className="input-group">
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" id="initial-investment" onChange={handleInitialInvestmentChange} />

                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id="annual-investment" onChange={handleAnnualInvestmentChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" id="expected-return" onChange={handleExpectedReturnChange} />

                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" onChange={handleDurationChange} />
                </div>
            </div>
            <div id="result">
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment Value</th>
                            <th>Interest (Year) </th>
                            <th>Total Interest</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from({ length: duration }).map((_, index) => {
                                const investmentValue = initialInvestment + (index * annualInvestment)
                                const interestEarnedInYear = investmentValue * (expectedReturn / 100)
                                const totalInterest = interestEarnedInYear * (index + 1)
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{formatter.format(investmentValue)}</td>
                                        <td>{formatter.format(interestEarnedInYear)}</td>
                                        <td>{formatter.format(totalInterest)}</td>
                                        <td>{formatter.format(investmentValue)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}