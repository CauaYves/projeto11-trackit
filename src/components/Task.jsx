import styled from "styled-components"
import check from '../img/check.svg'

export default function Task(props) {

    const {name, done, sequence, highestSequence} = props

    return (
        <Tasks>
            <StatusTask>
                <h1>{name}</h1>
                <p>Sequência atual: {sequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </StatusTask>
            <CheckBox>
                <img src={check} alt="check"/>
            </CheckBox>
        </Tasks>
    )
}

const Tasks = styled.div`
    width: 100%;
    height: 100px;
    padding: 15px;
    border-radius: 5px;
    margin: 5px 0px;

    background: white;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const StatusTask = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        margin-bottom: 10px;
    }
`
const CheckBox = styled.button`
    background: #EBEBEB;
    border: 1px solid #E7E7E7; 
    border-radius: 5px;
    
    img{
        padding: 15px 10px;
    }
    &:hover{
        opacity: .5;
    }
    &:active{
        background: #52B6FF;
        opacity: .9;
    }
`
