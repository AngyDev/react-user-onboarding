import React from "react";
import Logo from "./components/Logo";

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Logo />                
                <h1 style={{fontFamily: "Montserrat Alternates"}}>Hello World</h1>
            </div>
        )
    }
}