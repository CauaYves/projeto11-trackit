import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habits";
import Login from "./pages/Login";
import Hoje from "./pages/Hoje"
import Historico from "./pages/Historico";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

function App() {

    const theme = useContext(ThemeContext)

    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>

                <Routes>
                    <Route 
                        path="/" 
                        element={ <Login /> }>    
                    </Route>

                    <Route 
                        path="/cadastro" 
                        element={ <Cadastro /> }>     
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
