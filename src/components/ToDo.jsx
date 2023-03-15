import styled from "styled-components"
import trash from "../img/trash.svg"

export default function ToDo() {
    return (
        <ToDoBox>
            <ToContainer>
                <div>
                    <h4>Ler 1 capítulo de livro</h4>
                </div>
                <ContainerBtns>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                    <WeekBtn>D</WeekBtn>
                </ContainerBtns>
                <Trash src={trash} alt="trash"/>
            </ToContainer>
        </ToDoBox>
    )
}
const ToDoBox = styled.section`
    width: 100%;
    height: 91px;

    display: flex;
    align-items: center;
    justify-content: center;
`
const ToContainer = styled.div`
    background: white;

    padding: 8px;
    border-radius: 5px;
    min-width: 340px;
    height: 70px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;

    div{
        h4{
            margin-left: 2px;
            font-size: 15px;
            font-weight: 400;
            color: #666666;
        }
    }
`
const ContainerBtns = styled.div`
    width: 100%;

    display: flex;
    button{
        background: #FFFFFF;
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
const Trash = styled.img`
    height: 13px;
    position: absolute;
    right: 10px;
`
