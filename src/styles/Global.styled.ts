import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Poppins', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border-top-style: solid;
        border-right-style: solid;
        border-bottom-style: solid;
        border-left-style: solid;
        width: 150px;
        height: 50px;
        border-radius: 0.25rem;
        border-width: 1px;
        font-family: Poppins;
        color: #666666;
        font-size: 15px;
        border-radius: 0.5rem;
    }

    button:hover {
        border-top-style: unset;
        border-right-style: unset;
        border-bottom-style: unset;
        border-left-style: unset;
        background-color: #A7A7A7;
        color: #FFFFFF;
    }
`

