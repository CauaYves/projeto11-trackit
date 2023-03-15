import styled from "styled-components"
import hoje from "../img/hoje.svg"

export default function TrackBar(){
    return(
        <TrackNav>
            <a href="/habitos" >Hábitos</a>

            <img src={hoje} alt="today"></img>

            <a href="/Histórico" >Histórico</a>
        </TrackNav>
    )
}

const TrackNav = styled.nav`
    background: white;

    padding: 36px ;
    width: 100%;
    height: 70px;

    position: fixed;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a{
        text-decoration: none;
        color: #52B6FF;
    }
    img{
        position: absolute;
        bottom: -50%;
        left: 50%;

        transform: translate(-50%, -50%)
    }
`
