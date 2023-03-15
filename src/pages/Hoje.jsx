import NavBar from "../components/NavBar"
import styled from "styled-components"
import TrackBar from "../components/TrackBar"
import Task from "../components/Task"

export default function Hoje() {
    return (
        <TodayContainer>
            <NavBar />

            <TodayScreen>
                <StatusHabits>
                    <h3>Segunda, 17/05</h3>
                    <h6>nenhum hábito concluido ainda</h6>
                </StatusHabits>
                <TaskContainer>
                    <Task />
                    <Task />
                    <Task />

                </TaskContainer>


            </TodayScreen>

            <TrackBar />
        </TodayContainer>

    )
}

const TodayContainer = styled.section`

`
const TodayScreen = styled.div`
    background: #E5E5E5;

    height: calc(100vh - 70px);
    margin-top: 70px;
    padding: 0px 20px;

    h3{
        padding-top: 30px;
        color: #126BA5;
        font-size: 22px;
    }
    h6{
        color: #BABABA;
    }
`
const StatusHabits = styled.div`
    margin: 30px 0px;
`
const TaskContainer = styled.div`

`
