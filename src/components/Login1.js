import React,{useState}from 'react'
import {Link} from 'react-router-dom';

export default function Login1(props) {
    const [login, setLogin] = useState('login')
    const flagChange = () =>{
        props.changeFlag()
    }

    const [number, setNumber] = useState('');
    const ChangeManger=()=>{
        if(number=='99999'){
            setLogin('manager')
            setNumber(null)
        }
    }
    const valid = () =>{
        var counter = 0;
        var index = 0;
        if(number==null){}
        else{

            props.worker.map((e,i)=>{
                if(e.number==number){
                    counter++;
                    index = i;
                    props.Changeindex(index);
                }
            })
            if(counter!=0){
                props.LoginCounter(index)
                props.changeFlag(true)
            }
            else{
                alert(`worker ${number} do not exist`)
            }
        }
    }

    return (
        <div>
            <h1>login</h1><br/><br/>
            <span>NO.</span> <input style={{marginRight:'25px'}} onChange={(e)=>{setNumber(e.target.value)}}/><br/><br/>
            <div>
                {ChangeManger()}
                </div>
            <Link to={`/${login}`}><button className='PrimeBtn' onClick={valid}>Enter</button></Link>
        </div>
    )
}
