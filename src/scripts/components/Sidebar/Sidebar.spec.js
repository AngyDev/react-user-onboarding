import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Sidebar from "./Sidebar";
import { StepContext } from "../../context/StepContext";
import { TranslationContext } from "../../context/TranslationContext";
import translations from "../../translations/translations.json";

describe("Sidebar component test", () => {

    /**
     * Render the sidebar component
     * @param {Context} step 
     * @returns The render of the Sidebar component with the usage of the context value
     */
    function renderSidebar(step, translation) {
        return render(
            <StepContext.Provider value={[step]}>
                <TranslationContext.Provider value={[translation]}>
                    <Sidebar />
                </TranslationContext.Provider>
            </StepContext.Provider >
        );
    }

    afterEach(cleanup);

    it("should render the logo component", () => {

        renderSidebar(1, translations.italian);

        expect(screen.getByTestId("logo")).toBeInTheDocument();
    });

    it("should render the italian translation of the first element of the checklist", () => {

        renderSidebar(1, translations.italian);

        expect(screen.getByText("Dettagli del contatto")).toBeInTheDocument();
    });

})