import styled, { ThemeContext } from "styled-components"
import logo from '../img/logo.png'
import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Sumbiter from "../components/Submiter"
import ContextApi from "../context/ContextApi"

export default function Cadastro() {

    const {disabled, email, image, name, password, setDisabled, setEmail, setImage, setName, setPassword } = useContext(ContextApi)
    const navigate = useNavigate()

    function register(e) {
        e.preventDefault()
        setDisabled(true)

        setEmail('')
        setName('')
        setPassword('')
        setImage('')

        const userObj = {
            email: email,
            name: name,
            image: image,
            password: password
        }

        const link = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        axios.post(link, userObj)
            .then((answer) => validate(answer))
            .catch((error) => takeError(error))

    }

    function validate(answer) {
        setEmail(answer.data.email)
        setPassword(answer.data.password)
        setImage(answer.data.image)

        navigate('/')
        setDisabled(false)
    }

    function takeError(error){
        alert(error.response.data.message)
        setDisabled(false)
    }

    return (
        <LoginContainer>
            <LoginBox>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <FormBox onSubmit={register}>
                    <label htmlFor="iEmail">
                        <input
                            type="email"
                            id="iEmail"
                            placeholder='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={disabled}

                        />
                    </label>

                    <label htmlFor="iPassword">
                        <input
                            type="password"
                            id="iPassword"
                            placeholder='senha'
                            minLength={4}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={disabled}

                        />
                    </label>

                    <label htmlFor="iName">
                        <input
                            type="text"
                            id="iName"
                            placeholder='nome'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={disabled}

                        />
                    </label>

                    <label htmlFor="iFoto">
                        <input
                            type="url"
                            id="iFoto"
                            placeholder='foto'
                            required
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            disabled={disabled}
                        />
                    </label>

                    <Sumbiter
                        text="Cadastrar"
                        disabled={disabled}
                    />

                    <Alink href="/">
                        Já tem uma conta? Faça login!
                    </Alink>

                </FormBox>
            </LoginBox>
        </LoginContainer>
    )
}
const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
`
const LoginBox = styled.div`
    margin-top: 15%;
    width: 400px;

    display: flex;
    align-items: center;
    flex-direction: column;
`
const FormBox = styled.form`    
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        font-family: 'Lexend Deca';
        box-sizing: border-box;
        width: 300px;
        height: 45px;
        margin: 5px;
        color: black;
        outline: 0;
        &:focus{
            border-color: lightblue;
        }
        &:disabled{
            background: #D4D4D4;
        }
    }
`
const Alink = styled.a`
    color: #52B6FF;
`
