import styled from "styled-components"

export default function WeekBtn({days}){
    return(
        <WeekBtns data-test="habit-day">{days}</WeekBtns>
    )
}

const WeekBtns = styled.button`
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
