import React, {useState} from 'react'
import add from '../../Images/add.png'
import Data from './Data';

const AddAppoints = ({onSumbit}) => {

    const [selectedName, setSelectedName] = useState('')
    const [selectedDate, setSelectedDate] = useState('')

    const handleNameChange = (selectOption) => {
        setSelectedName(selectOption);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    function submit(e) {                                                                    
        e.preventDefault();
        onSumbit(selectedName, selectedDate)
    }

    const [popup2, setPopup2] = useState(false)
    const handleClick = () => {
        setPopup2(!popup2);
    }
    return (
        <>
           <div className='add--appoints' onClick={handleClick}>
              <img src={add} alt="plussign" /> 
              <h5>
                  Add
              </h5>
           </div>
           {popup2?
           <div className='unblurred'>
           <div className='newappoint--popup'>
               <div className='na--text'>
                  <h3>Add New <br /> Appointment</h3>
               </div>
               <div className='form2'>
                   <input list='data'
                      value={selectedName} 
                      onChange={handleNameChange}
                    />
                    <datalist className='form2--data'>
                    {Data.map((item) => (
                       <option key={item.id} value={item.id}>
                         {`${item.firstName} ${item.lastName}`}
                      </option>
                      ))}
                    </datalist>

                    <br />

                   <input 
                       type="date"
                       className='form2--input'
                       name='date'
                       value={selectedDate}
                       onChange={handleDateChange}
                       placeholder='Pick Date'  
                   />

                   <br />

                   <button onClick={submit}>Submit</button>

               </div>
           </div>
           </div>: ''}
        </>    
    )
}

export default AddAppoints
