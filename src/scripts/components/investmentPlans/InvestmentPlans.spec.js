import React from "react";
import { render, screen } from "@testing-library/react";
import InvestmentPlans from "./InvestmentPlans";

describe("Investment plans test", () => {

    /**
    * Render the InvestmentPlans component
    * @returns The render of the InvestmentPlans component
    */
    function renderInvestmentPlans() {
        return render(
            <InvestmentPlans />
        );
    }

    it("should contains two price input", () => {
        renderInvestmentPlans();
        expect(screen.queryAllByTestId("price-input")).toHaveLength(2);
    });

    it("should contains two radiobox input", () => {
        renderInvestmentPlans();
        expect(screen.queryAllByTestId("radiobox")).toHaveLength(2);
    });
})