import React, { useEffect } from 'react'
import './Setting.css';
//context 
import { useEmployeeContext } from '../../controller/UserContext';

function Setting() {
    const {
        setEmployeeNumber,
        setProfitPercentage,
        totalAmount,
        isGstChecked,
        setIsGstChecked,
        setGst
    } = useEmployeeContext();

    const handleEmployeeNumberChange = (e) => {
        setEmployeeNumber(e.target.value);
    }

    const handleProfitChanges = (e) => {
        setProfitPercentage(e.target.value);
    }

    useEffect(() => {
        if (isGstChecked) {
            const costAfterGst = totalAmount * 0.1;
            setGst(costAfterGst);
        } else {
            setGst(0);
        }
    }, [isGstChecked, totalAmount]);

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
                        <input type="checkbox" onChange={(e) => setIsGstChecked(e.target.checked)} />
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