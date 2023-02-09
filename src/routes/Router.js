import {BrowserRouter,Routes,Route} from "react-router-dom"
import DetailPage from "../pages/DetailPage"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Pokedex from "../pages/Pokedex"


const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/detail/:id" element={<DetailPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router