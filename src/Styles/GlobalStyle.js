import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        background-color: pink;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;
