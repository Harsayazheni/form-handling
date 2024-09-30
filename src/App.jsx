import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const userNameRef = useRef("");
  const [userNameState, setUserNameState] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicked");

    const username = userNameRef.current.value;
    console.log(username);
  }

  const handleClickImpure = () => {
    console.log("Handle Click Impure is Called");
    let username1 = userNameRef.current.value;
    console.log(username1);
  }

  const handleClickpure = () => {
    console.log("Handle Click Pure is Called");
    console.log(userNameState);
  }
  
  const handleAnchor = (e) => {
    console.log("Anchor is called")
  }
  return (
    <>
      <h1>Form Handling</h1>

      <h2>Using Anchor Tag</h2>
      <a onClick={handleAnchor}>Click</a>
      <h2>Impure Component</h2>
      <form onSubmit={handleClick}>
        <input type="text" name="username" ref={userNameRef} id="txtUsername" />
        <button type="submit">Click</button>
      </form>

      <h2>Half Impure Component</h2>
      <form>
        <input type="text" ref={userNameRef} />
        <button type="button" onClick={handleClickImpure}>Click</button>
      </form>

      <h2>Pure Component</h2>
      <form>
        <input 
          type="text" 
          value={userNameState}
          onChange={(e) => setUserNameState(e.target.value)} 
        />
        <button type="button" onClick={handleClickpure}>Click</button>
      </form>
    </>
  )
}

export default App;
