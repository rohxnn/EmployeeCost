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

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  }

  const handleAddClick = () => {
    setInputList([...inputList, { description: '', amount: '', occurence: '' }])
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
    const updatedInputList = [...inputList];
    updatedInputList.splice(i, 1);
    setInputList(updatedInputList);
  }

  useEffect(() => {
    const newTotalAmount = inputList.reduce((accumulator, data) => {
      return accumulator + (data.amount / data.occurence);
    }, 0);
    setTotalAmount(newTotalAmount);
  }, [inputList]);
  return (
    <>
      <div className='box'>
        <div className='sub-box'>
          <table>
            <thead className="myTable">
              <tr className="table-header">
                <th>Description</th>
                <th>Amount</th>
                <th>Occurence</th>
              </tr>
            </thead>

            <tbody>
              {inputList.map((x, i) => (
                <tr key={i}>
                  <td>
                    <input className='custom-input' type='text' name="description" value={x.description} onChange={(e) => handleInputChange(e, i)} />
                  </td>
                  <td>
                    <input className='custom-input' type='number' name="amount" value={x.amount} onChange={(e) => handleInputChange(e, i)} />
                  </td>
                  <td className='monthly-block'>
                    <input className='custom-input monthly-input' type='number' name="occurence" value={x.occurence} placeholder='monthly' onChange={(e) => handleInputChange(e, i)} />
                    <button disabled={inputList.length <= 1} className='delete-button' onClick={() => deleteSection(i)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='button-box'>
            <button className='add-button' onClick={handleAddClick}>Add Items</button>
          </div>
          <>
            <EmployeeDetail
              costPerPerson={costPerPerson}
              profitPercent={profitPercent}
              totalAmount={totalAmount}
            ></EmployeeDetail>
          </>
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