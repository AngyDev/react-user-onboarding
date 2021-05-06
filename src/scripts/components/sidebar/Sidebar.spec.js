import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Sidebar from "./Sidebar";
import {StepContext} from "../../context/StepContext";

describe("Sidebar component test", () => {

    /**
     * Render the sidebar component
     * @param {Context} step 
     * @returns The render of the Sidebar component with the usage of the context value
     */
     function renderSidebar(step) {
        return render(
            <StepContext.Provider value={[step]}>
                <Sidebar />
            </StepContext.Provider>
        );
    }

    afterEach(cleanup);

    it("should render the logo component", () => {

        renderSidebar(1);

        expect(screen.getByTestId("logo")).toBeInTheDocument();
    });

})