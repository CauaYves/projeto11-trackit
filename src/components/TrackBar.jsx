import styled from "styled-components"
import hoje from "../img/hoje.svg"
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function TrackBar() {

    return (
        <TrackNav data-test="menu">
            <a
                href="/habitos"
                data-test="habit-link"
            >
                Hábitos
            </a>

                <CircularContainer>
                    <CircularProgressbar
                        value={1}
                        text={`Hoje`}
                        styles={buildStyles({
                            rotation: 1,
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: `white`,
                            textColor: 'white',
                            trailColor: '#52B6FF',
                        })}
                    />
                </CircularContainer>


            <a
                href="/historico"
                data-test="history-link"
            >
                Histórico
            </a>
        </TrackNav>
    )
}
const CircularContainer = styled.div`
    background: #52B6FF;

    border-radius: 50%;
    width: 91px;
    margin-bottom: 60px;
`

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
