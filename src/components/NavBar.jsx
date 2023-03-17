import styled from "styled-components"
import profilephototest from '../img/profilephototest.png'

export default function Habitos() {
    return (
        <NavBar data-test="header">
            <p>Track It</p>
            <img src={profilephototest} alt="logo" />
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
