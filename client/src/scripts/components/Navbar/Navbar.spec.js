import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { StepContext } from "../../context/StepContext";
import '@testing-library/jest-dom';
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router";
import { TranslationContext } from "../../context/TranslationContext";
import translations from "../../translations/translations.json";


describe("Navbar test", () => {

    /**
     * Render the navbar component
     * @param {Context} step 
     * @returns The render of the Navbar component with the usage of the context value
     */
    function renderNavbar(step, translation) {
        return render(
            <StepContext.Provider value={[step]}>
                <TranslationContext.Provider value={[translation]}>
                    <MemoryRouter>
                        <Navbar />
                    </MemoryRouter>
                </TranslationContext.Provider>
            </StepContext.Provider>
        );
    }

    afterEach(cleanup);

    it("should render three button component", () => {
        renderNavbar(null, translations.english);

        expect(screen.queryAllByTestId("button")).toHaveLength(3);
    });

})