import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

    it("checkbox on change value", () => {
        renderInvestmentPreferences();
        const checkbox = screen.getByLabelText(/Single family/i);

        fireEvent.change(checkbox, { target: { value: "Single family" } });
        expect(checkbox.value).toBe("Single family");
    });

})