import React from 'react';
import style from "./app.module.css"
import {Header} from "./components/Headder/Header";
import {Route, Routes} from 'react-router-dom';
import {MainWrapper} from "./components/MainWrapper";
import {AboutCountry} from "./components/AboutCountry/AboutCountry";

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Routes>
                <Route path="/" element={<MainWrapper/>}/>
                <Route path="/aboutCountry/:name" element={<AboutCountry/>}/>
            </Routes>
        </div>
    );
}

export default App;
