import React, { useEffect, useState } from 'react'
import './Setting.css';

function Setting({ totalAmount, setCostPerPerson, setProfitPercentage }) {
    const [employeeNumber, setEmployeeNumber] = useState(1);

    useEffect(() => {
        const costPerPerson = totalAmount / employeeNumber;
        setCostPerPerson(costPerPerson);
        console.log(costPerPerson)
    }, [totalAmount, employeeNumber]);

    const handleEmployeeNumberChange = (e) => {
        setEmployeeNumber(e.target.value);
    }

    const handleProfitChanges = (e) => {
        setProfitPercentage(e.target.value);
    }

    return (
        <div className='settingForm'>
            <input type='number' name="employeeNumber" onChange={(e) => handleEmployeeNumberChange(e)} />
            <input type='number' name='profitPercent' onChange={(e) => handleProfitChanges(e)} />
        </div>
    );
}

export default Setting;