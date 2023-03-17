import styled from "styled-components"
import WeekBtn from "./WeekBtn"

export default function InputHabitsContainer() {
    return (
        <InputHabitsContainers data-test="habit-create-container">
            <InputHabits>
                <label for="iName">
                    <input 
                        type="text" 
                        id="iName" 
                        placeholder="nome do hábito" 
                        required 
                        data-test="habit-name-input"
                    />
                </label>
                <ContainerBtns>
                    <WeekBtn value="a"/>
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
