import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  //setEmployeeList get all the data from database and set it to EmployeeList.
  const [employeeList, setEmployeeList] = useState([]);


  //we are making request an send post request
  const addEmployees = ()=>{
    axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(()=>{
      console.log("successfully Done")


     //THIS FOR SHOWING RESULT DIRECTLY ONCE I CLICK ADD, NO NEDD OF CLICKING SHOW EMPLOYEES.
      // setEmployeeList([...employeeList, {
      //   name: name,
      // age: age,
      // country: country,
      // position: position,
      // wage: wage,

      // }]),

    });

  };
  const getEmployee = ()=>{
    axios.get("http://localhost:3001/employees").then((response)=>{
      console.log(response)
      setEmployeeList(response.data);
    });
  }
   //we are sending this object to the backend.
  // const handleDisplay = ()=>{
  //   console.log(name + age + country + position + wage)
  // }

  return (
    <div className='App'>
      <div className='forms'>
        <label htmlFor="">Name:</label>
        <input type="text" name="" id="" onChange={(event)=>{
          setName(event.target.value);
        }} />
        <label htmlFor="">Age:</label>
        <input type="number" name="" id="" onChange={(event)=>{
          setAge(event.target.value);
        }} />
        <label htmlFor="">Country:</label>
        <input type="text" name="" id="" onChange={(event)=>{
          setCountry(event.target.value);
        }}/>
        <label htmlFor="">Position:</label>
        <input type="text" name="" id="" onChange={(event)=>{
          setPosition(event.target.value);
        }} />
        <label htmlFor="">Wage (year):</label>
        <input type="text" name="" id="" onChange={(event)=>{
          setWage(event.target.value);
        }} />
        <button onClick={addEmployees}>Add Employees</button>
      </div>
      

      <div className='employee'>
        <button onClick={getEmployee}>Show Employees</button>
        {employeeList.map((val)=>{
          return <div className='employees'> 
          <h3>Name:{val.Name}</h3>
          <h3>Age:{val.Age}</h3>
          <h3>Country:{val.Country}</h3>
          <h3>Position:{val.Position}</h3>
          <h3>Wage:{val.Wage}</h3>
           </div>
        })};
      </div>

    </div>
  );
};

export default App;