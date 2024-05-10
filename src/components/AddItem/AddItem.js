import React, { useState } from 'react';
import './AddItem.css'
//components
import Setting from '../Setting/Setting';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';

function AddItem() {
  const [inputList, setInputList] = useState([{ description: '', amount: '', month: '' }]);
  const [costPerPerson, setCostPerPerson] = useState(0);
  const [profitPercent, setProfitPercentage] = useState(0);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    console.log(profitPercent);
    console.log(costPerPerson)
  }

  const handleAddClick = () => {
    setInputList([...inputList, { description: '', amount: '', month: '' }])
  }

  function getTotalAmount() {
    console.log('hiii')
    const sum = (accumulator, data) => {
      return accumulator + (data.amount / data.month);
    };
    const totalAmount = inputList.reduce(sum, 0);
    console.log(totalAmount);
    return totalAmount.toFixed(2);
  }

  return (
    <>
      <div className='box'>
        <div className='sub-box'>
          {
            inputList.map((x, i) => {
              return (
                <div className='formBox' key={i}>
                  <input type='text' name="description" onChange={(e) => handleInputChange(e, i)} />
                  <input type='number' name="amount" onChange={(e) => handleInputChange(e, i)} />
                  <input type='number' name="month" onChange={(e) => handleInputChange(e, i)} />
                </div>
              );
            })
          }

          <div>
            <button onClick={handleAddClick}>Add Items</button>
          </div>
          <div>
            <EmployeeDetail
              costPerPerson={costPerPerson}
              profitPercent={profitPercent}
              totalAmount={getTotalAmount()}
            ></EmployeeDetail>
          </div>
        </div>
        <div className='side-box'>
          <Setting totalAmount={getTotalAmount()}
            setCostPerPerson={setCostPerPerson}
            setProfitPercentage={setProfitPercentage}
          ></Setting>
        </div>
      </div>
    </>
  );
}

export default AddItem;