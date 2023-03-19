import styled from "styled-components"
import ContextApi from "../context/ContextApi"
import { useContext } from "react"

export default function NavBar() {

    const {image} = useContext(ContextApi)

    return (
        <NavBars data-test="header">
            <p>Track It</p>
            <UserPhoto src={image} alt="logo" />
        </NavBars>
    )
}

const NavBars = styled.nav`
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
const UserPhoto = styled.img`
    height: 50px;
    width: 50px;

    border-radius: 50%;
    background: white;
`
