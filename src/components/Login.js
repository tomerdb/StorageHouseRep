import React,{useState} from 'react'
import Login1 from './Login1';
import Login2 from './Login2';

export default function Login(props) {




    const show = () =>{
        if(props.flag==false){
            return <Login1 LoginCounter={props.LoginCounter} changeFlag={props.changeFlag} worker={props.worker} addWorker={props.addWorker} index={props.index} Changeindex={props.Changeindex} changeFlag={props.changeFlag}/>
        }
        else{return <Login2 ProductsMoved={props.ProductsMoved} changePlace={props.changePlace} Products={props.Products} changeFlag2={props.changeFlag} index={props.index} worker={props.worker}/>}
    }

    return (
        <div className='Login'>
            {show()}

        </div>
    )
}
