import React, { useState } from 'react'
import plusIcon from '../../Images/plusicon.png'
import name from '../../Images/name.png'

function AddPatient() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    })

    const [popup, setPopup] = useState(false)
    const handleClick = () => {
        setPopup(!popup);
    }

    function handleChange (e) {
        const {name, value} =e.target
        setForm({...form, [name]: value});
    }

    function submit(e) {
        e.preventDefault();
        const patientData = {
            firstName: form.firstName,
            lastName: form.lastName,
            phoneNumber: form.phoneNumber,
        }
        fetch('', {
            method: 'POST',
            headers: {
                'Content-type': 'apllication/json; charset=UTF-8'
            },
            body: JSON.stringify(patientData)
        }).then(res => res.json())
          .then(res => {
            console.log(res)
          })

    } 
    return (
        <>
          <div className='addPatient'>
            <h3>Add New <br/> Patient</h3>
            <img src={plusIcon} 
              alt='plusCircle'
              onClick={handleClick} 
            />
          </div>
          {popup?
          <div className='newpatient--popup'>
            <div className='np--popup'>
                <img src={name} alt="names" />
                <h2>New Patient Form</h2>
            </div>
            <div className='form1'>
                <input 
                  type="text"
                  placeholder='First Name' 
                  className='form1--input'
                  name='firstName'
                  value={form.firstName}
                  onChange={handleChange}
                />
                <input 
                  type="text"
                  placeholder='Last Name' 
                  className='form1--input'
                  name='lastName'
                  value={form.lastName}
                  onChange={handleChange}
                />
                <input 
                  type="number"
                  placeholder='Phone Number' 
                  className='form1--input'
                  name='phoneNumber'
                  value={form.phoneNumber}
                  onChange={handleChange}
                />
                <button onClick={submit}>Submit</button>
            </div>
        </div>:""}

        </>
        
    )
}

export default AddPatient
