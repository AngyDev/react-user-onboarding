import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { StepContext } from "../../context/StepContext";
import '@testing-library/jest-dom';
import Checklist from "./Checklist";


describe("Checklist test", () => {

    /**
     * Render the checklist component
     * @param {Context} step 
     * @returns The render of the Checklist component with the usage of the context value
     */
    function renderChecklist(step) {
        return render(
            <StepContext.Provider value={[step]}>
                <Checklist />
            </StepContext.Provider>
        );
    }

    afterEach(cleanup);

    it("should render three checklist item component", () => {
        renderChecklist(null);

        expect(screen.queryAllByTestId("checklist-li")).toHaveLength(3);
    });

})