import React from "react";
import { render, screen } from "@testing-library/react";
import PriceSlider from "./PriceSlider";
import { act } from "react-dom/test-utils";

describe("Price Slider test component", () => {

    it("should render the list of prices", () => {
        act(() => {
            render(<PriceSlider start="10000" end="100000" />);
        });

        expect(screen.getByTestId("price-slider").textContent).toBe("$10,000$50,000$100,000$200,000$500,000$1,000,000+");
    });

})