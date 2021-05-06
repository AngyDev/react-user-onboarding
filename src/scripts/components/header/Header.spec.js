import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { StepContext } from "../../context/StepContext";
import '@testing-library/jest-dom';
import Header from "./Header";

describe("Header component test", () => {

    /**
     * Render the header component
     * @param {Context} step 
     * @returns The render of the Header component with the usage of the context value
     */
    function renderHeader(step) {
        return render(
            <StepContext.Provider value={step}>
                <Header />
            </StepContext.Provider>
        );
    }

    afterEach(cleanup);

    it("should render the total of the step", () => {
        const { getByText } = render(<Header />);

        expect(getByText(/STEP/i).textContent).toBe("STEP  OF 3");
    });

    it("should render the step number empty", () => {

        renderHeader(null);

        expect(screen.getByText("STEP OF 3")).toBeInTheDocument();
    });

    it("should render the step equal 1", () => {
        const step = 1;

        renderHeader(step);

        expect(screen.getByText(`STEP ${step} OF 3`)).toBeInTheDocument();
        expect(screen.getByText(/STEP/i).textContent).toBe("STEP 1 OF 3");
    });
})