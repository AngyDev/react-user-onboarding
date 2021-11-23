import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { StepContext } from "../../context/StepContext";
import '@testing-library/jest-dom';
import Header from "./Header";
import { TranslationContext } from "../../context/TranslationContext";
import translations from "../../translations/translations.json";

describe("Header component test", () => {

    /**
     * Render the header component
     * @param {Context} step 
     * @returns The render of the Header component with the usage of the context value
     */
    function renderHeader(step, translation) {
        return render(
            <StepContext.Provider value={[step]}>
                <TranslationContext.Provider value={[translation]}>
                    <Header />
                </TranslationContext.Provider>
            </StepContext.Provider>
        );
    }

    afterEach(cleanup);

    it("should render the step number empty", () => {

        renderHeader(null, translations.english);

        expect(screen.getByText("STEP OF 3")).toBeInTheDocument();
    });

    it("should render the step equal 1", () => {
        const step = 1;

        renderHeader(step, translations.english);

        expect(screen.getByText(`STEP ${step} OF 3`)).toBeInTheDocument();
        expect(screen.getByText(/STEP/i).textContent).toBe("STEP 1 OF 3");
    });

    it("should render one button component", () => {
        renderHeader(null, translations.english);

        expect(screen.queryAllByTestId("button")).toHaveLength(1);
    })
})