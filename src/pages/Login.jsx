import styled from 'styled-components'
import logo from "../img/logo-completa.svg"

export default function Login() {

    function login(){
        
    }

    return (
        <LoginContainer>
            <LoginBox>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <FormBox>
                    <label htmlFor="iName">
                        <input type="email" id="iName" placeholder='email' required/>
                    </label>

                    <label htmlFor="iPassword">
                        <input type="password" id="iPassword" placeholder='senha' required minLength={4}/>
                    </label>

                    <Sumbiter 
                        type="submit" 
                        value="entrar" 
                        onClick={() => login()}
                    />
                    <a href="/cadastro">
                        Não tem uma conta? Cadastre-se!
                    </a>
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
const Sumbiter = styled.input`
    padding-left: 40%;
    background: #52B6FF; 
    font-family: 'Lexend Deca';
    box-sizing: border-box;
    width: 200px;
    height: 45px;
    margin: 100px;

    border: none;
    border-radius: 5px;

    &:hover {
        background-color: lightblue;
        cursor: pointer;
    }
`
