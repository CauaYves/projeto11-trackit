import styled from "styled-components"

export default function InputHabitsContainer() {
    return (
        <InputHabitsContainers>
            <InputHabits>
                <label for="iName">
                    <input type="text" id="iName" placeholder="nome do hábito" required />
                </label>
                <ContainerBtns>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                </ContainerBtns>
                <BtnsContainer>
                    <div>
                        <button>Cancelar</button>
                        <button>Salvar</button>
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
const WeekBtn = styled.button`
    margin: 2px;

    height: 30px;
    width: 30px;

    border: 1px solid #D4D4D4;
    border-radius: 5px;

    color: #D4D4D4;
    &:hover{
        opacity: 0.7;
    }
`
