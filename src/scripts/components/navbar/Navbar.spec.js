import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { StepContext } from "../../context/StepContext";
import '@testing-library/jest-dom';
import Navbar from "./Navbar";


describe("", () => {

    /**
     * Render the navbar component
     * @param {Context} step 
     * @returns The render of the Navbar component with the usage of the context value
     */
    function renderNavbar(step) {
        return render(
            <StepContext.Provider value={[step]}>
                <Navbar />
            </StepContext.Provider>
        );
    }

    afterEach(cleanup);

    it("should render three button component", () => {
        renderNavbar(null);

        expect(screen.queryAllByTestId("button")).toHaveLength(3);
    });

})