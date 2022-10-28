import React , { useState , useEffect} from "react";
import './App.css';

const App=()=> {
  
  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakestore();
  },[])

  const fakestore = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    //console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData);
    setFake(jsonData);
  }
  //fakestore();
   return(
    <>
    <h2> aastey backend assignment  </h2>
    <div className="container">
      {fake.map((values) => {
        return (
          <>
          <div className="box">
      <div className="content">
        <h3> {values.title} </h3>
        <p> {values.description} </p>
      </div>
      <img src= {values.image} alt="" />
     </div></>
        )
      })}
     
    </div>
    
    </>
  )
}

export default App