import React, { useEffect, useState } from 'react';
import './AddItem.css'
//components
import Setting from '../Setting/Setting';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';

function AddItem() {
  const [inputList, setInputList] = useState([{ description: '', amount: '', month: '' }]);
  const [costPerPerson, setCostPerPerson] = useState(0);
  const [profitPercent, setProfitPercentage] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  let updatedInputList = [...inputList];

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  }

  const handleAddClick = () => {
    setInputList([...inputList, { description: '', amount: '', month: '' }])
  }

  // function getTotalAmount() {
  //   const totalAmount = inputList.reduce((accumulator, data) => {
  //     return accumulator + (data.amount / data.month);
  //   },0);
  //   console.log(totalAmount);
  //   return totalAmount ? totalAmount.toFixed(2) : 0;
  // } kk

  function deleteSection(i) {
    console.log(i);
    updatedInputList = [...inputList];
    updatedInputList.splice(i, 1);
    setInputList(updatedInputList);
    console.log(updatedInputList);
    console.log(inputList);
  }

  useEffect(() => {
    const newTotalAmount = inputList.reduce((accumulator, data) => {
      return accumulator + (data.amount / data.month);
    }, 0);
    console.log(newTotalAmount);
    setTotalAmount(newTotalAmount);
  }, [inputList]);

  return (
    <>
      <div className='box'>
        <div className='sub-box'>
          {
            updatedInputList.map((x, i) => {
              return (
                <div className='formBox' key={i}>
                <table>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      <input type='text' name="description" value={x.description} onChange={(e) => handleInputChange(e, i)} />
                        </td>
                      <td>
                      <input type='number' name="amount" value={x.amount} onChange={(e) => handleInputChange(e, i)} />
                        </td>
                      <td>
                      <input type='number' name="month" value={x.month} onChange={(e) => handleInputChange(e, i)} />
                        </td>
                        <button disabled={updatedInputList.length <= 1} onClick={() => deleteSection(i)}>X</button>
                    </tr>
                  </tbody>
                </table>
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
              totalAmount={totalAmount}
            ></EmployeeDetail>
          </div>
        </div>
        <div className='side-box'>
          <Setting
            totalAmount={totalAmount}
            setCostPerPerson={setCostPerPerson}
            setProfitPercentage={setProfitPercentage}
          ></Setting>
        </div>
      </div>
    </>
  );
}

export default AddItem;