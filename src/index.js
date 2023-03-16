import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavHeader from "./components/NavHeader";
import HomeAllReports from "./components/HomeAllReports";
import ReportByPassword from "./components/ReportByPassword";

const App = () => {
    return(
        <div id='app'>
            <NavHeader />
            <Routes>
            <Route path="/" element={<HomeAllReports/>}/>
            <Route path='/yourreports' element={<ReportByPassword/>}/>
            </Routes>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
)