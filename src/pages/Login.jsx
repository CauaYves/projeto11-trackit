import styled from 'styled-components'
import logo from "../img/logo-completa.svg"
import Sumbiter from '../components/Submiter'
import { useState } from 'react'
import axios from 'axios'
export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function logon(){

        const link = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const obj = {
            email: email,
            password: password,
        }

        const promise = axios.post(link, obj)
        promise.then((answer) => console.log(answer))
        promise.catch((answer) => console.log(answer))

    }

    return (
        <LoginContainer>                           
            <LoginBox>

                <div>
                    <img src={logo} alt="logo" />
                </div>

                <FormBox onSubmit={logon}>

                    <label htmlFor="iName">
                        <input 
                            data-test="email-input"
                            type="email" 
                            id="iName" 
                            placeholder='email' 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label htmlFor="iPassword">
                        <input 
                            data-test="password-input"
                            type="password" 
                            id="iPassword" 
                            placeholder='senha' 
                            required 
                            minLength={4}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <Sumbiter/>

                    <Redirecter 
                        href="/cadastro"
                        data-test="signup-link"
                    >
                        Não tem uma conta? Cadastre-se!
                    </Redirecter>

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
const Redirecter = styled.a`    
    color: rgb(82, 182, 255);
`
