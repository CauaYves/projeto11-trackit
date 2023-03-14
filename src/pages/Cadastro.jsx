import styled from "styled-components"
import logo from '../img/logo.png'

export default function Cadastro() {
    return (
        <LoginContainer>
            <LoginBox>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <FormBox>
                    <label htmlFor="iName">
                        <input type="email" id="iName" placeholder='email' required />
                    </label>

                    <label htmlFor="iPassword">
                        <input type="password" id="iPassword" placeholder='senha' required />
                    </label>

                    <label htmlFor="iName">
                        <input type="text" id="iName" placeholder='nome' required />
                    </label>

                    <label htmlFor="iFoto">
                        <input type="url" id="iFoto" placeholder='foto' required />
                    </label>

                    <Sumbiter type="submit" value="entrar" />
                    <a href="/">
                        Já tem uma conta? Faça login!
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

        outline: 0;
        &:focus{
            border-color: lightblue;
        }
    }
`
const Sumbiter = styled.input`
    padding-left: 40%;
    background: #52B6FF;
`
