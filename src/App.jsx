import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1); // like-> let count=1;
  const [name, setName]= useState("Ahmed");
  const [age, setAge]= useState(18);

  const [user, setUser]= useState({
    name: "Ahmed",
    age: 22,
    address: "Islamabad",
    role: "Developer",

  })

  // Functions
  const decrement = () => {
    if (count <= 0) {
      console.log("Can not be less than 0");
      return;
    }
    console.log("Decrement");
    setCount(count-1);
  };
  const increment = () => {
    console.log("Increment");
    setCount(count+1);
  };
  const changeName=()=>{
    setName("Mohammad Ahmed Hassan");
  }
  const showAge=()=>{
    setAge(Math.floor(Math.random() * 60));
  }

  // UI
  return (
    <div className="container">
      <h1>Counter</h1>

      <div className="counter">
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
      </div>

      <p>My name is {name}</p>
      <button onClick={changeName}>Full name</button>

      <p>{age}</p>
      <button onClick={showAge}>Get Age</button>

      <h1>Learning Conditions</h1>
      <p>{user.name}</p>
      <p>age {user.age}</p>
      <p>address {user.address}</p>
      <p>role {user.role}</p>
      {user.age >= 18 ? <p>Eligible to vote</p> : <p>Not eligible to vote</p>}
      {user.age >= 20 && <p>Can get license</p>}
    </div>
  );
}

export default App
