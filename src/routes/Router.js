import {BrowserRouter,Routes,Route} from "react-router-dom"
import Characteristic from "../pages/Characteristic"
import DetailPage from "../pages/DetailPage"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"



const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/characteristic/:id" element={<Characteristic/>}/>
                <Route path="/detail/:id" element={<DetailPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router