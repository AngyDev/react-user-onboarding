import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { StepContext } from "../../context/StepContext";
import '@testing-library/jest-dom';
import Main from "./Main";
import { MemoryRouter } from "react-router";
import { TranslationContext } from "../../context/TranslationContext";
import translations from "../../translations/translations.json";

describe("Main test", () => {

    /**
     * Render the main component
     * @param {Context} step 
     * @returns The render of the Main component with the usage of the context value
     */
    function renderMain(step, translation) {
        return render(
            <StepContext.Provider value={[step]}>
                <TranslationContext.Provider value={[translation]}>
                    <MemoryRouter>
                        <Main />
                    </MemoryRouter>
                </TranslationContext.Provider>
            </StepContext.Provider>
        );
    }

    afterEach(cleanup);

    it("should render three button component", () => {
        renderMain(1, translations.english);

        expect(screen.getByTestId("main")).toBeInTheDocument();
    });

    it("should render the header component", () => {
        renderMain(1, translations.english);

        expect(screen.getByTestId("header")).toBeInTheDocument();
    });

    it("should render the step component", () => {
        renderMain(1, translations.english);

        expect(screen.getByTestId("step")).toBeInTheDocument();
    });

    it("should render the navbar component", () => {
        renderMain(1, translations.english);

        expect(screen.getByTestId("navbar")).toBeInTheDocument();
    });

})