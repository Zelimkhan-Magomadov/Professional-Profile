import {useState} from 'react'
import './App.css'
import Header from "./components/header/Header.jsx";
import Skills from "./screens/skills/Skills.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./screens/home/Home.jsx";
import Contacts from "./screens/contacts/Contacts.jsx";
import Profile from "./components/profile/Profile.jsx";

function App() {
    const [count, setCount] = useState(1)

    return (
        <>
            <div className="container">
                <Header/>
                <div className={"profile-container"}>
                    <Profile/>
                    <main className="content">

                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/skills" element={<Skills/>}/>
                            <Route path="/contacts" element={<Contacts/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    )
}

export default App
