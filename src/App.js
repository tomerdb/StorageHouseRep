import React,{useState} from 'react';
import './App.css';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Manager from './components/Manager';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [Worker, setWorker] = useState([]);
  const [Products, setProducts] = useState([{number:'11122',box:'green',malgeza:'no',inplace:false},{number:'22554',box:'green',malgeza:'no',inplace:false},{number:'66698',box:'blue',malgeza:'yes',inplace:false},{number:'78544',box:'red',malgeza:'no',inplace:false},{number:'69875',box:'red',malgeza:'no',inplace:false}]);
  const [Flag, setFlag] = useState(false)
  const [Index, setIndex] = useState(0);
  const AddWorker = (number,name,drive,counter,counter2) =>{
    setWorker([...Worker,{number:number,name:name,drive:drive,login:counter,movedProducts:counter2}])
  }
  const ChangeIndex=(index)=>{
    setIndex(index);
  }
  const changeFlag = (x) =>{
      setFlag(x)
  }
  const changePlace = (index) =>{
    var temp = [...Products]
    temp[index].inplace=true
    setProducts(temp)
  }
  const LoginCounter = (index) =>{
    let temp = [...Worker]
    temp[index].login=temp[index].login+1;
    setWorker(temp)
  }
  const ProductsMoved = (index) =>{
    let temp = [...Worker]
    temp[index].movedProducts=temp[index].movedProducts+1;
    setWorker(temp)
  }
  return (
    <div className="App">
      
      <Router>

        <Switch>

            <Route exact path='/' component={()=>{return <HomePage/>}}/>
            <Route exact path='/signup' component={()=>{return <SignUp worker={Worker} addWorker={AddWorker}/>}}/>
            <Route exact path='/login' component={()=>{return <Login ProductsMoved={ProductsMoved} LoginCounter={LoginCounter} changePlace={changePlace} Products={Products} worker={Worker} index={Index} Changeindex={ChangeIndex} changeFlag={changeFlag} flag={Flag}/>}}/>
            <Route exact path='/manager' component={()=>{return <Manager worker={Worker}/>}}/>

        </Switch>

      </Router>


    </div>
  );
}

export default App;
