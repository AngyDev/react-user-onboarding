import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { StepContext } from "../../context/StepContext";
import '@testing-library/jest-dom';
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router";


describe("Navbar test", () => {

    /**
     * Render the navbar component
     * @param {Context} step 
     * @returns The render of the Navbar component with the usage of the context value
     */
    function renderNavbar(step) {
        return render(
            <StepContext.Provider value={[step]}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </StepContext.Provider>
        );
    }

    afterEach(cleanup);

    it("should render two button component", () => {
        renderNavbar(null);

        expect(screen.queryAllByTestId("button")).toHaveLength(2);
    });

    it("should render three button component", () => {
        renderNavbar(1);

        expect(screen.queryAllByTestId("button")).toHaveLength(3);
    });

})