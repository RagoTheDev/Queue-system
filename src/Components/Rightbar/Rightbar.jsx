import React from 'react'
import Calendar from './Calender'
import GraphDesign from './GraphDesign'

function Rightbar() {
    return (
        <div className='rightbar'>
            <div className='rightbar--back'>
                <Calendar />
                <GraphDesign />
            </div>
        </div>
    )
}

export default Rightbar
