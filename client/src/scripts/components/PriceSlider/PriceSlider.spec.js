import React from "react";
import { render, screen } from "@testing-library/react";
import PriceSlider from "./PriceSlider";
import { act } from "react-dom/test-utils";
import { TranslationContext } from "../../context/TranslationContext";
import translations from "../../translations/translations.json";

describe("Price Slider test component", () => {

    it("should render the list of prices", () => {
        act(() => {
            render(
                <TranslationContext.Provider value={[translations.english]}>
                    <PriceSlider start="10000" end="100000" />
                </TranslationContext.Provider>
            );
        });

        expect(screen.getByTestId("price-slider").textContent).toBe("$10,000$50,000$100,000$200,000$500,000$1,000,000+");
    });

})