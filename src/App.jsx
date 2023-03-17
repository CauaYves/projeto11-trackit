import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habits";
import Login from "./pages/Login";
import Hoje from "./pages/Hoje"
import Historico from "./pages/Historico";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import UserContext from './context/ContextApi'

function App() {
    console.log('xyza@gmail.com')

    const [disabled, setDisabled] = useState(false)
    const [image, setImage] = useState('')

    return (
        <UserContext.Provider value={{image: image, setImage: setImage}}>
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
        </UserContext.Provider>
    )
}

export default App;
