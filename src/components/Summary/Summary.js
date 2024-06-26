import React from 'react'
import './Summary.css'
//context
import { useEmployeeContext } from '../../controller/UserContext';

function Summary() {
    const {
        employeeNumber,
        profitPercent,
        totalAmount,
        gstAmount,
        salary
    } = useEmployeeContext();

    const gstTotalAmount = totalAmount + gstAmount;
    const costPerEmployee = gstTotalAmount / employeeNumber;
    const totalCostPerEmployee = costPerEmployee + Number(salary);
    const profit = totalCostPerEmployee * (profitPercent / 100);
    
    return (
        <div className='summary-box'>
            <p>Total Cost - Rs.{isNaN(gstTotalAmount) || !isFinite(gstTotalAmount) ? 0 : gstTotalAmount.toFixed(2)}</p>
            <p>Cost Per Person - Rs.{isNaN(costPerEmployee) || !isFinite(costPerEmployee) ? 0 : costPerEmployee.toFixed(2)}</p>
            <p>Total Cost Per Person - Rs.{isNaN(totalCostPerEmployee) || !isFinite(totalCostPerEmployee) ? 0 : totalCostPerEmployee.toFixed(2)}</p>
            <p>Profit - Rs.{isNaN(profit) || !isFinite(profit) ? 0 : profit.toFixed(2)}</p>
            <p>CashFlow Per Month : Rs.0.00</p>
        </div>
    )
}

export default Summary;