import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

   
}

html{
    @media only screen and (min-width: 320px) and (max-width:768px) {
        h1{
            font-size: 12px;       
        }
        
    }
}
h1{
    padding: 16px;       
}



`;
