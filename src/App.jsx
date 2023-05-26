import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateUsers from "./components/Createusers"
import Edit from "./components/Edit"
import Nav from "./components/Nav"
import Users from "./components/Users"
const App =()=>{
    return (
        <div>
            
          
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/createusers" element={<CreateUsers/>}> </Route>
                <Route path="/users" element={<Users/>}></Route>
                <Route path="/edituser/:index" element={<Edit/>}></Route>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}
export default App