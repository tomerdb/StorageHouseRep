import React from 'react'
import {Link} from 'react-router-dom'
export default function Manager(props) {
    return (
        <div className='row'>

                            <h2 className='col-12' style={{marginTop:'20px'}}>Manager</h2>

                <table>

                <tr>
                    <td className='TableHeader'>NO.</td>
                    <td className='TableHeader'>Name</td>
                    <td className='TableHeader'>NumLogin</td>
                    <td className='TableHeader'>NumProductsMoved</td>
                </tr>
                {props.worker.map((e)=>{
                    
                    return<tr>
                        <td>
                            {e.number}
                        </td>
                        <td>
                            {e.name}
                        </td>
                        <td>
                            {e.login}
                        </td>
                        <td>
                            {e.movedProducts}
                        </td>
                    </tr>
                })}
                </table>
            
            <div className='col-9'></div><Link className='col-3' to='/'><button className='PrimeBtn' style={{width:'90px',height:'25px',fontSize:'12px',marginRight:'25px'}}>Log Out</button></Link>
        </div>
    )
}
