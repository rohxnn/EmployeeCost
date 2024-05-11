import React, { useEffect, useState } from 'react'
import './Setting.css';

function Setting(props) {
    const [employeeNumber, setEmployeeNumber] = useState(1);

    useEffect(() => {
        const costPerPerson = props.totalAmount / employeeNumber;
        props.setCostPerPerson(costPerPerson);
    }, [props.totalAmount, employeeNumber]);

    const handleEmployeeNumberChange = (e) => {
        setEmployeeNumber(e.target.value);
    }

    const handleProfitChanges = (e) => {
        props.setProfitPercentage(e.target.value);
    }

    return (
        <div>
            <div className='setting-header'>
                Settings
            </div>
            <div className='settingForm'>
                <label>Number of Empolyees:</label>
                <input type='number' name="employeeNumber" onChange={(e) => handleEmployeeNumberChange(e)} />
                <label>Profit Percentage:</label>
                <input type='number' name='profitPercent' onChange={(e) => handleProfitChanges(e)} />
                <label>Other:</label>
                <div className='toggle-display'>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <label style={{ marginLeft: '10px' }}>Add GST</label>
                </div>
                <div className='toggle-display'>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <label style={{ marginLeft: '10px' }}>Reduce TDS</label>
                </div>
            </div>
        </div>
    );
}

export default Setting;