import React from "react";
import { render, screen } from "@testing-library/react";
import InvestmentPreferences from "./InvestmentPreferences";

describe("Investment preferences test", () => {

    /**
    * Render the InvestmentPreferences component
    * @returns The render of the InvestmentPreferences component
    */
    function renderInvestmentPreferences() {
        return render(
            <InvestmentPreferences />
        );
    }

    it("should contains 8 checkbox", () => {
        renderInvestmentPreferences();
        expect(screen.queryAllByTestId("checkbox")).toHaveLength(8);
    });

})