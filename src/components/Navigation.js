import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    z-index: 1;
    width: 100%;
    height: 50px;
    background-color: white;
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: pink;
`;

const AnchorContainer = styled.div`
    a {
        text-decoration: none;
        color: inherit;
        text-transform: uppercase;
        font-size: 18px;
        text-align: center;
        font-weight: 600;
        &:not(:last-child) {
            margin-right: 20px;
        }
    }
`;

function Navigation() {
    return (
        <Nav>
            <AnchorContainer>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </AnchorContainer>
        </Nav>
    );
}

export default Navigation;
