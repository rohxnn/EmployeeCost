import React, { useEffect, useState } from 'react'
import './EmployeeDetail.css';
//component
import Summary from '../Summary/Summary';
//context
import { useEmployeeContext } from '../../controller/UserContext';

function EmployeeDetail() {
    const { setSalary } = useEmployeeContext();
    
    return (
        <div className='container-2'>
            <div className='employee-box'>
                <label className='label-size'>Employee Name</label>
                <input type='text' className='custom-input'/>
                <label className='label-size'>Employee Salary</label>
                <input type='number' className='custom-input' onChange={(e) => setSalary(e.target.value)} />
            </div>
            <Summary></Summary>
        </div>
    );
}

export default EmployeeDetail;