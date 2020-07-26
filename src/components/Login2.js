import React from 'react'
import {Link} from 'react-router-dom';

export default function Login2(props) {

    const valid = (index) =>{
        if(props.Products[index].malgeza=='no'){
            props.changePlace(index)
            props.ProductsMoved(props.index)
        }
        else if(props.Products[index].malgeza=='yes'&&props.worker[props.index].drive=='yes'){
            props.changePlace(index)
            props.ProductsMoved(props.index)
        }
        else{
            alert('Need Forklift Truck..')
        }
    }


    return (
        <div className='Login'>
            <h1>Welcome {props.worker[props.index].name}</h1>

            <div style={{textAlign:'left',display:'inline'}}>
            <p>Details:</p>
            <div className='row'><span className='LoginDD'>Full Name:</span><h6 className='LoginD'>{props.worker[props.index].name}</h6></div>
            <div className='row'><span className='LoginDD'>NO. :</span><h6 className='LoginD'>{props.worker[props.index].number}</h6></div>
            <div className='row'><span className='LoginDD'>Forklift truck license:</span><h6 style={{marginRight:'30px'}} className='LoginD'>{props.worker[props.index].drive}</h6><div className='col-9'></div></div>
            <h6>List of products</h6>
            </div>

            {props.Products.map((e,index)=>{
                if(e.inplace==false){
                return <div className='Products'>
                    <p>NO.{e.number}</p><br/>
                    <p>Name: {e.box} Box</p><br/>
                    <p>Need forklift truck: {e.malgeza}</p>
                    <button className='PrimeBtn' style={{width:'90px',height:'25px',fontSize:'12px',marginLeft:'150px',marginBottom:'4px'}} onClick={()=>{valid(index)}}>Update</button>
                </div>}
            })}


            <Link to='/'><button className='PrimeBtn' style={{width:'90px',height:'25px',fontSize:'12px'}} onClick={()=>{props.changeFlag2(false)}}>Log Out</button></Link>


        </div>
    )
}
