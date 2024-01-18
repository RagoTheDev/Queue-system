import React, {useState} from 'react'
import AddAppoints from './AddAppoints';
import searchIcon from '../../Images/icons8.png'
import Data from './Data';

function AllAppoints() {

    const [search, setSearch] = useState('');

    return (
        <div className='table'>
           <section className='table--header'>
                <h3>All Appointments</h3>
                <div className='table--side'>
                  <div className='input--group2'>
                       <input type="search"placeholder='Search Patient'
                          onChange={(e)=> setSearch(e.target.value)}
                       />
                     <img src={searchIcon} alt='searchIcon' />
                 </div>
                 <div>
                    <AddAppoints />
                 </div>
                </div>

           </section>


         <section className='table--body'>
             <table>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.filter((item) => {
                        return search.toLowerCase() === ''
                          ? item 
                          : item.firstName.toLowerCase().includes(search)
                    }).map((item) => {
                        return (
                      <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.date}</td>
                          <td>{item.time}</td>
                     </tr>
                        )
                  })}
                </tbody>
             </table>
            </section>
        </div>
    )
}

export default AllAppoints
