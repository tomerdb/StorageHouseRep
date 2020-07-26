import React from 'react'
import {Link} from 'react-router-dom';

export default function HomePage() {
    return (
        <div className='HomePage'>
            <h1>Logistics Management</h1><br/><br/><br/>
            <Link to='/signup'><button className='HomeBtn'>Sign Up</button></Link><br/>
            <Link to='/login'><button className='HomeBtn'>Log in</button></Link>

        </div>
    )
}
