import styled from "styled-components"
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"

export default function Sumbiter() {
    
    const [disabled] = useState(false)

    return (
        <Sumbiters
            type="submit"
            value="entrar"
            disabled={disabled}
        >
            {disabled ? <ThreeDots color="white" height={30} width={90} /> : 'Cadastrar'}
        </Sumbiters>
    )
}

const Sumbiters = styled.button`
    font-size: 20px;
    width: 303px;
    height:45px;
    border-radius: 5px;
    color: white;
    border:none;
    background: #52B6FF;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    &:disabled{
        opacity: .7;
    }
`
