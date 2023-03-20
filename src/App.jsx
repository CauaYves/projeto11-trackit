import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import UserContext from './context/ContextApi'
import Routes from "./Routes";

function App() {
    console.log('xyza@gmail.com')

    const [disabled, setDisabled] = useState(false)
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [token, setToken] = useState(undefined)
    const [habits, setHabits] = useState([])
    const [habitName, setHabitName] = useState('')
    const [days, setDays] = useState([])


    return (
        <UserContext.Provider value={
            {
            image: image,
                setImage: setImage,
            disabled: disabled,
                setDisabled: setDisabled,
            email: email,
                setEmail: setEmail,
            password: password,
                setPassword: setPassword,
            name: name,
                setName: setName,
            token: token,
                setToken: setToken,
            habits: habits,
                setHabits: setHabits,
            habitName: habitName,
                setHabitName: setHabitName,
            days: days,
                setDays: setDays,
            }
        }>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;
