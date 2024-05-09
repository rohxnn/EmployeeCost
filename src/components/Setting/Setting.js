import React, { useState } from 'react'
import './Setting.css';


function Setting({ totalAmount }) {
const [employeeNumber, setEmployeeNumber] = useState(1);
const [profitPercent, setProfitPercent] = useState(100);

    return (
        <div>
            <h1>Setting
                {totalAmount}
            </h1>
        </div>
    )
}

export default Setting;