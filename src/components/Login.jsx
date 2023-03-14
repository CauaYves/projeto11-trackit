import styled from 'styled-components'
import logo from '../img/logo.png'

export default function Login() {
    return (
        <LoginContainer>
            <LoginBox>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <FormBox>
                    <label htmlFor="iName">
                        <input type="email" id="iName" placeholder='email' />
                    </label>
                    <label htmlFor="iPassword">
                        <input type="password" id="iPassword" placeholder='senha' />
                    </label>

                    <Sumbiter type="submit" value="entrar"/>
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
