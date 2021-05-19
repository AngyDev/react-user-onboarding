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

    it("should render the step", () => {
        renderStep(1);

        expect(screen.getByTestId("step")).toBeInTheDocument();
    });

    it("should render the contact component in the first step", () => {
        renderStep(1);

        expect(screen.getByTestId("contact")).toBeInTheDocument();
    });

    it("should render the investment plans component in the second step", () => {
        renderStep(2);

        expect(screen.getByTestId("investment-plans")).toBeInTheDocument();
    });

    it("should render the investment preferences component in the third step", () => {
        renderStep(3);

        expect(screen.getByTestId("investment-preferences")).toBeInTheDocument();
    });

})