import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  
  const nayoks = ["anowar", 'bappaa',"kratos"]
  const products =[
    {name: 'photoshop', price:'$90.99'},
    {name: 'Illustrator', price:"$60.99"},
    {name: "pdf reader" , price:"$6.99"},
    {name: "Adobe after effects" , price:"$249.99"}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>i am a react person.</p>
        <Counter></Counter>
        <Users></Users>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name +"  "}{product.price}</li>)
          }
          <ul>
            <li>{nayoks[0]}</li>
            <li>{nayoks[1]}</li>
            <li>{nayoks[2]}</li>
          </ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
          {/* <Products product={products[0]}></Products>
          <Products product={products[1]}></Products>
          <Products product={products[2]}></Products> */}
         
      </header>
    </div>
  );
}

function Counter(){
  const[ count, setCount] = useState(10)
  const handleIncrease = () => setCount(count+1);
  // const handleDecrease = () => setCount(count-1);
 return(
 <div>
   <h1>Count: {count}</h1>
   <button onClick={handleIncrease}>increase</button>
   <button style={{marginLeft: '5px'}} onClick={() => setCount(count-1)}>decrease</button>
 </div>
 )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data))
  }, [])

 return(
   <div>
  <h3>Dynamic User:{users.length}</h3>
 <ul>
   {
     users.map(user => <li>{user.name}</li>)
     
   }
 </ul>
   </div>
 )

}

function Product(props){

  const productStyle={
    border:"5px solid green",
    borderRadius:"5px",
    backgroundColor:"lightgrey",
    height:"200px",
    width:"200px",
    margin:"10px",
    float:"left"
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
      <h5>{name}</h5>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){

  return(
  <div style={{border:"2px solid red" ,marginTop:'5px' ,width:"400px"}}>
    <h1>my name:{props.name}</h1>
    <p>my profession:{props.job}</p>
  </div>
  )
}

export default App;