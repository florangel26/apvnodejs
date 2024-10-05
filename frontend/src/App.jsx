import { BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgottenPassword from "./pages/ForgottenPassword";
import ConfirmAccount from "./pages/ConfirmAccount";




function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />}/>
            <Route path="Register" element={<Register />}/>
            <Route path="ForgottenPassword" element={<ForgottenPassword />}/>
            <Route path="ConfirmAccount/:id" element={<ConfirmAccount />}/>
         
            
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
