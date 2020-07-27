import React,{useState} from 'react'
import {Link} from 'react-router-dom';
export default function SignUp(props) {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [drive, setDrive] = useState('no');


    const valid = () =>{
        
        var counter = 0;
        if(numberCounter==0&&name.length>4&&spaceCounter!=0&&number.length==5&&letterCounter==0&&name.charAt(0)!=' '&&name.charAt(1)!=' '&&name.charAt(2)!=' '&&name.charAt(3)!=' '){
            props.worker.map((e)=>{
                if(e.number==number){
                    counter++
                }
            })
        }
        else{return alert('Error')
        }
        if(counter==0){
            props.addWorker(number,name,drive,0,0)
            
        }
        else{
            alert('Error')
        }

    }
    const numberValid = () => {
        if(number.length!=5){
            return <p id='numberSignup' style={{color:'red',fontSize:'12px'}}>the number must be with 5 digits.</p>
        }
        else{
            return<p id='numberSignup'> </p>
        }
    }
    var numberCounter = 0;
    var spaceCounter = 0;
    var letterCounter = 0;
    const nameValid = (e) => {
        for(let index = 0; index < e.length; index++){
            if(e.charAt(index)>='0'&&e.charAt(index)<='9'){
                numberCounter++
            }
            else if(e.charAt(index)==' '){
                spaceCounter++
            }
            else if(e.charAt(index)>'z'||e.charAt(index)<'a'&&e.charAt(index)>'Z'||e.charAt(index)<'A'){
                letterCounter++
            }
        }

        if(numberCounter!=0||e.length<5||letterCounter!=0||e.charAt(0)==' '||e.charAt(1)==' '||e.charAt(2)==' '||e.charAt(3)==' '||spaceCounter==0){
            return <p id='nameSignup' style={{color:'red',fontSize:'12px'}}>the name must contain minimum 4 characters.</p>
        }
        else{
            return <p id='nameSignup'> </p>
        }

        
    }

    return (
        <div className='SignUp'>

            <h2 style={{textAlign:'center'}}>Sign up</h2><br/><br/>
            <div style={{marginLeft:'40px'}}>

            <span>NO.</span> <input className='SignUpNumber' type='number' onChange={(e)=>{setNumber(e.target.value)}}/>
            {numberValid(number)}
            <span>FullName</span> <input onChange={(e)=>{setName(e.target.value)}}/><br/>
            {nameValid(name)}
            <p>Forklift truck</p>
            <input className='SignRadio' type='radio' name='1' onClick={()=>{setDrive('yes')}}/>
            <input className='SignRadio' type='radio' defaultChecked name='1' onClick={()=>{setDrive('no')}}/><br/>
            <span className='SignSpan'>yes</span><span className='SignSpan'>no</span><br/><br/>
            <Link to='/'><button className='PrimeBtn' style={{marginLeft:'40px'}} onClick={valid}>Create</button></Link>
            </div>
            
            
        </div>
    )
}
