const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem; 
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.2);
        }
    }

    body {
        ${"" /* background: #f0f0f5; */}
        color: #333;
        -webkit-font-smoothing: antialiased;
        font-family: 'Montserrat', sans-serif;
    }
    
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: normal;
    }

    h3{
        font-size: 1.15rem;
        color: #333;
        padding: 1.5rem 0;
    }

    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }

    a{
        text-decoration: none;
        color: #333;
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
