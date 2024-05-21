import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Error from "./components/Error";
import './style/main.css'
import SignIn from "./pages/SignIn";
//import { useSelector, useDispatch } from 'react-redux'
//import { increment, decrement, incrementByAmount, selectValue } from './features/counter/counterSlice'

function App() {
  // const [count, setCount] = useState(0)
  // const count = useSelector(selectValue)
  // const dispatch = useDispatch()

    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
  )
    /*<>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment : count is {count}
        </button>
        <p></p>
        <button onClick={() => dispatch(decrement())}>
          Decrement: count is {count}
        </button>
        <p></p>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10: count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
