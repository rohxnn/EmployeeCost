import React, { createContext, useContext, useState } from "react";

const employeeContext = createContext();

export const useEmployeeContext =() => useContext(employeeContext);

export const UserContext = ({children}) => {
    const [profitPercent, setProfitPercentage] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [gstAmount, setGst] = useState(0);
    const [salary, setSalary] = useState(0);
    const [employeeNumber, setEmployeeNumber] = useState(1);
    const [isGstChecked, setIsGstChecked] = useState(false);

    return (
        <employeeContext.Provider
        value={{
            profitPercent,
            setProfitPercentage,
            totalAmount,
            setTotalAmount,
            gstAmount,
            setGst,
            salary,
            setSalary,
            employeeNumber,
            setEmployeeNumber,
            isGstChecked,
            setIsGstChecked
        }}>
            {children}
        </employeeContext.Provider>
    )
}