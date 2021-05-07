import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { StepContext } from "../../context/StepContext";
import '@testing-library/jest-dom';
import Step from "./Step";


describe("Step test", () => {

    /**
     * Render the step component
     * @param {Context} step 
     * @returns The render of the Step component with the usage of the context value
     */
    function renderStep(step) {
        return render(
            <StepContext.Provider value={[step]}>
                <Step />
            </StepContext.Provider>
        );
    }

    afterEach(cleanup);

    it("should render three button component", () => {
        renderStep(1);

        expect(screen.getByTestId("step")).toBeInTheDocument();
    });

})