import React from 'react'
import './Summary.css'

function Summary(props) {
    return (
        <div>
            <p>Total Cost - Rs.{isNaN(props.totalAmount) || !isFinite(props.totalAmount) ? 0 : props.totalAmount.toFixed(2)}</p>
            <p>Cost Per Person - Rs.{isNaN(props.costPerPerson) || !isFinite(props.costPerPerson) ? 0 : props.costPerPerson.toFixed(2)}</p>
            <p>Total Cost Per Person - Rs.{isNaN(props.totalCostPerEmployee) || !isFinite(props.totalCostPerEmployee) ? 0 : props.totalCostPerEmployee.toFixed(2)}</p>
            <p>Profit - Rs.{isNaN(props.profit) || !isFinite(props.profit) ? 0 : props.profit.toFixed(2)}</p>
            <p>CashFlow Per Month : Rs.0.00</p>
        </div>
    )
}

export default Summary;