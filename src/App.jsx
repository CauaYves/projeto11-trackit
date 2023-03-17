import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habits";
import Login from "./pages/Login";
import Hoje from "./pages/Hoje"
import Historico from "./pages/Historico";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { useState } from "react";

function App() {
    console.log('xyza@gmail.com')
    console.log('1234')
    console.log('xyza')

    const [disabled, setDisabled] = useState(false)

    return (
        <ThemeContext.Provider value={{email: '', password: '', userImg: '',}}>
            <BrowserRouter>

                <Routes>
                    <Route 
                        path="/" 
                        element={ <Login disabled={disabled} setDisabled={setDisabled} /> }>    
                    </Route>

                    <Route 
                        path="/cadastro" 
                        element={ <Cadastro disabled={disabled} setDisabled={setDisabled}/> }>     
                    </Route>

                    <Route 
                        path="/habitos" 
                        element={ <Habitos /> }>   
                    </Route>

                    <Route 
                        path="/hoje" 
                        element={ <Hoje /> }>     
                    </Route>

                    <Route 
                        path="/historico" 
                        element={ <Historico /> }>      
                    </Route>
                </Routes>

            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default App;
