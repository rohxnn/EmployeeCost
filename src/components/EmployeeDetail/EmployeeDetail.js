import React, { useEffect, useState } from 'react'
import './EmployeeDetail.css';

function EmployeeDetail(props) {
    const [salary, setSalary] = useState(0);
    const [totalCostPerEmployee, setTotalCostPerEmployee] = useState(0);
    const profit = totalCostPerEmployee * (props.profitPercent / 100);

    useEffect(() => {
        const newTotalCost = Number(props.costPerPerson) + Number(salary);
        setTotalCostPerEmployee(newTotalCost);
    }, [salary, props.costPerPerson]);

    function c() {
        console.log(totalCostPerEmployee);
        console.log(profit);
    }
    return (
        <div>
            {c()}
            <label>Employee Name</label>
            <input type='text' />
            <label>Employee Salary</label>
            <input type='number' onChange={(e) => setSalary(e.target.value)} />
        </div>
    );
}

export default EmployeeDetail;