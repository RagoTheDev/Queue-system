import React, {useState} from 'react'
import Header from './Header.jsx'
import Allcards from './Cards/Allcards.jsx'
import profilepic from '../Images/profilepic.png'
import Todaytable from './Tables/Todaytable.jsx';
import AllAppoints from './Tables/AllAppoints.jsx';
import AddPatient from '../Components/Leftbar/AddPatient.jsx'

function Main() {
    const [activeComponent, setActiveComponent] = useState(1);
    const handleComponentChange = (componentNumber) => {
        setActiveComponent(componentNumber);

    };

    return (
        <>
            <div className='sidebar'>
            <div className='sidebar--image'>
                <img src={profilepic} alt='profile-pic' />
                <h2>Dr Maxi Gamma</h2>
            </div>
            <div className='sidebar--list'>
              <ul>    
                <li className='active' onClick={() => handleComponentChange(1)}>Dashboard</li>
                <li onClick={() => handleComponentChange(2)}>Appointments</li>
                <li onClick={() => handleComponentChange(3)}>Patients</li>
              </ul>
            </div>
            
            <div className='sidebar--addpatient'>
              <AddPatient />
            </div>  
            </div>
            <div className='main grid-col-span-3'>
                <Header />
                <Allcards />
                {activeComponent === 1 && <Todaytable />}
                {activeComponent === 2 && <AllAppoints />}

            </div>
        </>
    );
}

export default Main
