import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import UserContext from './context/ContextApi'
import Routes from "./Routes";

function App() {
    console.log('xyza@gmail.com')

    const [image, setImage] = useState('')

    return (
        <UserContext.Provider value={{image: image, setImage: setImage}}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;
