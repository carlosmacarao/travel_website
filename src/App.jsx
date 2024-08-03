import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Travel Website</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat rerum et perspiciatis, est reprehenderit vero eius commodi aut pariatur adipisci aliquid tempore quod exercitationem, laborum quidem blanditiis dolor perferendis ex.
        </p>
      </div>
      
    </>
  )
}

export default App
