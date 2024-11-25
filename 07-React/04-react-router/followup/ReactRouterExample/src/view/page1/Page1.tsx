import React from 'react'
import { Link } from 'react-router-dom'

const page1 = () => {
    return (
        <div className='page' style={{ backgroundColor:'pink'}}><h1>
            Page1
        </h1>
        <Link to={'/2'}>Go to page 2</Link>
        <Link to={'/3'}>Go to page 3</Link>
        </div>
    )
}

export default page1