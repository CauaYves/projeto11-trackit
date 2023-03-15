import styled from "styled-components"
import NavBar from "../components/NavBar"
import TrackBar from "../components/TrackBar"

export default function Historico(){
    return(
        <HistoricContainer>
            <NavBar />

            <Historic>
                <h1>Historico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Historic>

            <TrackBar />
        </HistoricContainer>
    )
}

const HistoricContainer = styled.section`
`
const Historic = styled.section`
    height: calc(100vh - 70px);
    margin-top: 70px;
    width: 100vw;
    padding: 0px 20px;
    h1{
        padding: 25px 0px;
        color: #126BA5;
        font-size: 20px;
    }
    p{
        color: #666666;
    }

`
