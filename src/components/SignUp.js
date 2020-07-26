import React,{useState} from 'react'
import {Link} from 'react-router-dom';
export default function SignUp(props) {

    const [Number, setNumber] = useState('');
    const [Name, setName] = useState('');
    const [Drive, setDrive] = useState('no');


    const valid = () =>{
        
        var counter = 0;
        if(NumberCounter==0&&Name.length>4&&SpaceCounter!=0&&Number.length==5&&LetterCounter==0&&Name.charAt(0)!=' '&&Name.charAt(1)!=' '&&Name.charAt(2)!=' '&&Name.charAt(3)!=' '){
            props.worker.map((e)=>{
                if(e.number==Number){
                    counter++
                }
            })
        }
        else{return alert('Error')
        }
        if(counter==0){
            props.addWorker(Number,Name,Drive,0,0)
            
        }
        else{
            alert('Error')
        }

    }
    const numberValid = () => {
        if(Number.length!=5){
            return <p id='numberSignup' style={{color:'red',fontSize:'12px'}}>the number must be with 5 digits.</p>
        }
        else{
            return<p id='numberSignup'> </p>
        }
    }
    var NumberCounter = 0;
    var SpaceCounter = 0;
    var LetterCounter = 0;
    const nameValid = (N) => {
        for(let index = 0; index < N.length; index++){
            if(N.charAt(index)>='0'&&N.charAt(index)<='9'){
                NumberCounter++
            }
            else if(N.charAt(index)==' '){
                SpaceCounter++
            }
            else if(N.charAt(index)>'z'||N.charAt(index)<'a'&&N.charAt(index)>'Z'||N.charAt(index)<'A'){
                LetterCounter++
            }
        }

        if(NumberCounter!=0||N.length<5||LetterCounter!=0||N.charAt(0)==' '||N.charAt(1)==' '||N.charAt(2)==' '||N.charAt(3)==' '||SpaceCounter==0){
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
            {numberValid(Number)}
            <span>FullName</span> <input onChange={(e)=>{setName(e.target.value)}}/><br/>
            {nameValid(Name)}
            <p>Forklift truck</p>
            <input className='SignRadio' type='radio' name='1' onClick={()=>{setDrive('yes')}}/>
            <input className='SignRadio' type='radio' defaultChecked name='1' onClick={()=>{setDrive('no')}}/><br/>
            <span className='SignSpan'>yes</span><span className='SignSpan'>no</span><br/><br/>
            <Link to='/'><button className='PrimeBtn' style={{marginLeft:'40px'}} onClick={valid}>Create</button></Link>
            </div>
            
            
        </div>
    )
}
