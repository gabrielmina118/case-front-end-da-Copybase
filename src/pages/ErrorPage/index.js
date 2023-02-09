import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import { Main } from "./styled"

const ErrorPage = () =>{
    const navigate = useNavigate()

    

    return(
        <Main>
            <img 
            src="https://cdn.dribbble.com/users/1770381/screenshots/5500073/media/99f44446ca2bf79d18fca7403c712d1c.png?compress=1&resize=400x300&vertical=top"
            onClick={()=>goTo(navigate,"/")}
            />
        </Main>
    )
}

export default ErrorPage