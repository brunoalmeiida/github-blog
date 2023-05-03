import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 0.45rem;
        }

        ::-webkit-scrollbar-track {
            background: ${({theme}) => theme.colors["base-border"]};
        }

        ::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.colors["brand-blue"]};
            border-radius: 999px;
        }
    }

    body {
        background: ${({theme}) => theme.colors["base-background"]};
        color: ${({theme}) => theme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: ${({theme}) => theme.textSizes["text-m"]};
        font-family: "Nunito", sans-serif;
        line-height: 160%;
    } 

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }
`






