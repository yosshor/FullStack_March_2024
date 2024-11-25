import React from 'react'
import './page2.scss'
import { Link } from 'react-router-dom'

const Page2 = () => {
    return (
        <div className='page'>
            <h1>Page2</h1>
            <Link to={'/'}>Go to page 1</Link>
            <Link to={'/3'}>Go to page 3</Link>
        </div>
    )
}

export default Page2