import styled from "styled-components"
import NavBar from "../components/NavBar"
import TrackBar from "../components/TrackBar"
import InputHabitsContainer from "../components/InputHabitsContainer"
import ToDo from "../components/ToDo"
import { useContext, useEffect, useState } from "react"
import ContextApi from "../context/ContextApi"
import axios from "axios"

export default function Habitos() {

    const [isCreating, setIsCreating] = useState(false)
    const {image, disabled, habits, setHabits, habitName, days} = useContext(ContextApi)

    function createHabit() {
        setIsCreating(true)
    }

    return (
        <>
            <NavBar />

            <HabitsScreen>

                <MyHabits>
                    <div>
                        <h4>Meus hábitos</h4>
                        <AddIcon 
                            data-test="create-btn"
                            onClick={ () => createHabit()}
                        >+</AddIcon>
                    </div>
                </MyHabits>
                
                {isCreating? <InputHabitsContainer /> : ''}
                 
                {/* <ToDo /> */}

                <UserHabits>
                    <div>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </div>
                </UserHabits>
            </HabitsScreen>

            <TrackBar />
        </>
    )
}
const HabitsScreen = styled.section`
    background: #E5E5E5;

    width: 100%;
    margin:70px 0px 0px 0px ;
    height: 100vh;
    padding: 20px;
`
const MyHabits = styled.div`
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width: 340px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width: 340px;
    }
`
