import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InvestmentPreferences from "./InvestmentPreferences";
import { TranslationContext } from "../../context/TranslationContext";
import translations from "../../translations/translations.json";

describe("Investment preferences test", () => {

    /**
    * Render the InvestmentPreferences component
    * @returns The render of the InvestmentPreferences component
    */
    function renderInvestmentPreferences() {
        return render(
            <TranslationContext.Provider value={[translations.english]}>
                <InvestmentPreferences />
            </TranslationContext.Provider>
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