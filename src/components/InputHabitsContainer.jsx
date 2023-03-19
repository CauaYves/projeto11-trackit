import styled from "styled-components"
import { useState } from "react"
export default function InputHabitsContainer() {

    const weekDays = {
        s: { name: 'Domingo', isWeekend: true },
        m: { name: 'Segunda', isWeekend: false },
        t: { name: 'Terça', isWeekend: false },
        w: { name: 'Quarta', isWeekend: false },
        r: { name: 'Quinta', isWeekend: false },
        f: { name: 'Sexta', isWeekend: false },
        y: { name: 'Sábado', isWeekend: true }
    }

    const [habitName, setHabitName] = useState('')
    const [days, setDays] = useState({})

    function addDay(day, position){

        if (day in days && position in days) {
            return
        } else {
            setDays({ ...days, [day]: { name: weekDays[day].name, position: position, isWeekend: weekDays[day].isWeekend }})
        }
    }
    console.log(days)


    return (
        <InputHabitsContainers data-test="habit-create-container">
            <InputHabits>
                <label htmlFor="iName">
                    <input 
                        type="text" 
                        id="iName" 
                        placeholder="nome do hábito" 
                        required 
                        data-test="habit-name-input"
                        onChange={(e) => setHabitName(e.target.value)}
                        value={habitName}
                    />
                </label>
                <ContainerBtns>

                {Object.keys(weekDays).map((day, i) => {
                    return <WeekBtns 
                        onClick={() => addDay(day, i)}
                        key={i}>
                            {weekDays[day].name[0]}
                    </WeekBtns>
                })}

                </ContainerBtns> 
                <BtnsContainer>
                    <div>
                        <button data-test="habit-create-cancel-btn">Cancelar</button>
                        <button data-test="habit-create-save-btn">Salvar</button>
                    </div>
                </BtnsContainer>
            </InputHabits>
        </InputHabitsContainers>
    )
}

const InputHabitsContainers = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`
const InputHabits = styled.div`
    min-width: 340px;
    height: 200px;
    padding: 20px;  
    border-radius: 5px;

    background: white;

    input{
        color: black;
        width: calc(100% - 40px);
        height: 45px;

        font-size: 20px;
    }
`
const ContainerBtns = styled.div`
    width: 100%;

    display: flex;
    button{
        background: #FFFFFF;
    }
`
const BtnsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    div{
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button{
            height: 35px;
            width: 84px;
            border-radius: 5px;
            border: none;
        }
        button:first-child{
            background: white;
            color: #52B6FF;
        }
        button:last-child{
            background: #52B6FF;
            color: white;
        }
    }
`
const WeekBtns = styled.button`
    margin: 2px;

    height: 30px;
    width: 30px;

    border: 1px solid #D4D4D4;
    border-radius: 5px;

    background: ;
    color: #D4D4D4;
    &:hover{
        opacity: 0.7;
    }
`
