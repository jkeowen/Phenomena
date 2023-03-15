import React from "react";
import { createRoot } from "react-dom/client";
import NavHeader from "./components/NavHeader";
import HomeAllReports from "./components/HomeAllReports";

const App = () => {
    return(
        <div id='app'>
            <NavHeader />
            <HomeAllReports />
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
)