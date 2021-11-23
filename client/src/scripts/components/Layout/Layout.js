import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

export default function Layout({children}) {
    return (
        <div className="app-container">
            <Sidebar />
            <Main>{children}</Main>
        </div>
    )
}