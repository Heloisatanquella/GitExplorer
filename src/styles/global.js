import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
        
    }

    body{
        background-color:#852a54;
        width: 100vw;
        height: 100vh;
        font-size: 0.875rem;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, botton{
        color: #222;
        font-size: 0.875rem;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;