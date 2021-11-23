import React from "react";
import { render, screen } from "@testing-library/react";
import InvestmentPlans from "./InvestmentPlans";
import { StepContext } from "../../context/StepContext";
import { TranslationContext } from "../../context/TranslationContext";
import translations from "../../translations/translations.json";

describe("Investment plans test", () => {

    /**
    * Render the InvestmentPlans component
    * @returns The render of the InvestmentPlans component
    */
    function renderInvestmentPlans(step, translation) {
        return render(
            <StepContext.Provider value={[step]}>
                <TranslationContext.Provider value={[translation]}>
                    <InvestmentPlans />
                </TranslationContext.Provider>
            </StepContext.Provider>
        );
    }

    it("should contains two price input", () => {
        renderInvestmentPlans(2, translations.english);
        expect(screen.queryAllByTestId("price-input")).toHaveLength(2);
    });

    it("should contains two radiobox input", () => {
        renderInvestmentPlans(2, translations.english);
        expect(screen.queryAllByTestId("radiobox")).toHaveLength(2);
    });

    it("should contains two radiobox input", () => {
        renderInvestmentPlans(2, translations.english);
        expect(screen.queryAllByTestId("price-slider")).toHaveLength(1);
    });
})