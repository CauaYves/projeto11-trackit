import styled from "styled-components"
import logo from '../img/logo.png'
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Cadastro() {
    
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [disabled, setDisabled] = useState(false)

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
        const promise = axios.post(link, userObj)
        promise.then((answer) => navigate('/'))
        promise.catch((answer) => alert(answer.response.data))

    }

    function enterImg(input) {
        setImage(input)
    }

    function enterName(input) {
        setName(input)
    }

    function enterPass(input) {
        setPassword(input)
    }

    function enterEmail(input) {
        setEmail(input)
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
                            onChange={(e) => enterEmail(e.target.value)}
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
                            onChange={(e) => enterPass(e.target.value)}
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
                            onChange={(e) => enterName(e.target.value)}
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
                            onChange={(e) => enterImg(e.target.value)}
                            disabled={disabled}

                        />
                    </label>

                    <Sumbiter
                        type="submit"
                        value="entrar"
                        disabled={disabled}
                    >
                        {disabled ? <ThreeDots color="white" height={30} width={90} /> : 'Cadastrar'}
                    </Sumbiter>


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
    }
`
const Sumbiter = styled.button`
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
const Alink = styled.a`
    color: #52B6FF;
`
