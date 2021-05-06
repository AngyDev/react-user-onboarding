/* import React from "react";
import logo from "../../images/logo.svg";

export default function Logo() {
    return(
        <div>
            <img src={logo} alt="Logo"/>
        </div>
    )
} */

import React from "react";

export default function Logo() {
    return(
        <div data-testid="logo" className="logo__container">
            <img className="logo__img" src="./images/sidebar/logo.svg" alt="Logo"/>
            <hr className="spacing spacing--lg"></hr>
        </div>
    )
}