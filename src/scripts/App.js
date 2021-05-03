import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Sidebar />
                <Main />
            </div>
        )
    }
}