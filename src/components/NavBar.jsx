import styled from "styled-components"
import ContextApi from "../context/ContextApi"
import { useContext } from "react"

export default function Habitos() {

    const {image} = useContext(ContextApi)

    return (
        <NavBar data-test="header">
            <p>Track It</p>
            <img src={image} alt="logo" />
        </NavBar>
    )
}

const NavBar = styled.nav`
    position: fixed;
    top: 0;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background: #126BA5;

    height: 70px;
    padding: 20px;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        color: white;
        font-family: 'Playball', cursive;
        font-size: 39px;
    }
    img{
        width: 51px;
    }
`
