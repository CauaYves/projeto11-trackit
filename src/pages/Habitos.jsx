import styled from "styled-components"
import NavBar from "../components/NavBar"
import TrackBar from "../components/TrackBar"

export default function Habitos() {
    return (
        <>
            <NavBar />

            <HabitsScreen>
                <MyHabits>
                    <h4>Meus hábitos</h4>
                    <AddIcon>+</AddIcon>
                </MyHabits>
                <UserHabits>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </UserHabits>
            </HabitsScreen>

            <TrackBar />
        </>
    )
}

const HabitsScreen = styled.section`
    background: #E5E5E5;
    height: 100vh;
`

const MyHabits = styled.div`
    width: 100%;
    height: 80px;

    padding: 0px 17px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    & > h4:first-child{
        font-size: 22px; 
        color: #126BA5;
    }
`
const AddIcon = styled.h4`
    border-radius: 5px;
    font-size: 25px;
    width: 40px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #52B6FF;
    color: white;
`
const UserHabits = styled.div`
    padding: 17px;
`
