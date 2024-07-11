import { useState } from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css'
import Welcome from './Component/Welcome'
import Password from './Component/Password';
import List from './Component/List';
import { passwordContext } from './context/context';

function App() {
  const [item , setItem] = useState()
  const [a , seta] = useState(true)
  const router = createBrowserRouter([
    {
      path: "/",
      element:<> <Welcome/></>,
    },
    {
      path: "/Create-password",
      element:<> <Password/></>,
    },
    {
      path: "/Passwords",
      element:<> <List/></>,
    },
  ],
  {
    basename: "/password-manager/"
  }
);
  
  const sorry =()=>{
    if(a){
      alert("We apologize for the inconvenience, but our website is currently optimized for desktop use only. We are working on a mobile-friendly version and will resolve this issue in the near future.");
      seta(false)
    }
  }
  return (
    <>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
</style>

    <passwordContext.Provider value = {{item,setItem}}>
      <div>
       { sorry() }
          <RouterProvider router={router} />
      </div>
      </passwordContext.Provider>
    </>
  )
}

export default App



{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}