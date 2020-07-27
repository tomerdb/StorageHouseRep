import React,{useState}from 'react'
import {Link} from 'react-router-dom';

export default function Login1(props) {
    const [Login, setLogin] = useState('login')
    const flagChange = () =>{
        props.changeFlag()
    }

    const [Number, setNumber] = useState('');
    const ChangeManger=()=>{
        if(Number=='99999'){
            setLogin('manager')
            setNumber(null)
        }
    }
    const valid = () =>{
        var counter = 0;
        var index = 0;
        if(Number==null){}
        else{

            props.worker.map((e,i)=>{
                if(e.number==Number){
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
                alert(`worker ${Number} do not exist`)
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
            <Link to={`/${Login}`}><button className='PrimeBtn' onClick={valid}>Enter</button></Link>
        </div>
    )
}
