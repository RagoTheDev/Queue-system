import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

function Allcards() {
    return (
        <div className='allcards grid-col-span-3'>
            <Card1 />
            <Card2 />
            <Card3 />
        </div>
    )
}

export default Allcards
