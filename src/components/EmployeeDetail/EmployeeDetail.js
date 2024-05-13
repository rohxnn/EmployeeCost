import React, { useEffect, useState } from 'react'
import './EmployeeDetail.css';
//component
import Summary from '../Summary/Summary';

function EmployeeDetail(props) {
    const [salary, setSalary] = useState(0);
    const [totalCostPerEmployee, setTotalCostPerEmployee] = useState(0);
    const profit = totalCostPerEmployee * (props.profitPercent / 100);

    useEffect(() => {
        const newTotalCost = Number(props.costPerPerson) + Number(salary);
        setTotalCostPerEmployee(newTotalCost);
    }, [salary, props.costPerPerson]);

    return (
        <div className='container-2'>
            <div className='employee-box'>
                <label className='label-size'>Employee Name</label>
                <input type='text' className='custom-input'/>
                <label className='label-size'>Employee Salary</label>
                <input type='number' className='custom-input' onChange={(e) => setSalary(e.target.value)} />
            </div>
            <Summary
                totalAmount={props.totalAmount}
                costPerPerson={props.costPerPerson}
                totalCostPerEmployee={totalCostPerEmployee}
                profit={profit}
            ></Summary>
        </div>
    );
}

export default EmployeeDetail;