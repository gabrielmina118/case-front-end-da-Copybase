import {BrowserRouter,Routes,Route} from "react-router-dom"
import DetailPage from "../pages/DetailPage"
import Home from "../pages/Home"
import Pokedex from "../pages/Pokedex"


const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/detail/:id" element={<DetailPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router