import React, {useState} from 'react'
import './Doctors.css'
import searchIcon from '../Images/icons8.png'
import doctor from'../Images/doctor.jpg'

function Doctors() {

    const [search, setSearch] = useState('');
    return (
        <>
        <div className='nurse--home'>
            <div className='nurse--header'>
                <div className='header--items'>
                    <h1>Q Easy</h1>
                    <h3>Doctors' List</h3>
                </div>
                <div className='nurse--logout'>
                    <button>Log Out</button>
                </div>
            </div>
            <div className='nurse--main'>
                <div className='list--wrapper'>
                    <div className='list--box'>
                        <div className='list--header'>
                            <h3>Doctors</h3>
                            <div className='list--input'>
                                <input type="search" placeholder='Search Doctors'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <img src={searchIcon} alt='searchIcon' />
                            </div>
                        </div>
                        <div className='list--doctors'>
                            <div className='list--doctors--wrapper'>
                                <div className='list--doctors--cards'>
                                    <img src={doctor} alt="doctor" />
                                    <div className='list--doctors--tex'>
                                        <h2>Dr Maxi Gamma</h2>
                                        <p>Neurosurgeon</p>
                                    </div>
                                </div>
                                <div className='list--doctors--cards'>
                                    <img src={doctor} alt="doctor" />
                                    <div className='list--doctors--tex'>
                                        <h2>Dr Maxi Gamma</h2>
                                        <p>Neurosurgeon</p>
                                    </div>
                                    </div>
                                    <div className='list--doctors--cards'>
                                    <img src={doctor} alt="doctor" />
                                    <div className='list--doctors--tex'>
                                        <h2>Dr Maxi Gamma</h2>
                                        <p>Neurosurgeon</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default Doctors
