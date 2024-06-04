import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Error from "./components/Error";
import './style/main.css'
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import User from "./pages/User";
import PrivateRoute from "./utils/PrivateRoute";


function App() {

    return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        } />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
