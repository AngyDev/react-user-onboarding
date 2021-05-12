import React from "react";
import { render, screen } from "@testing-library/react";
import PriceInput from "./PriceInput";
import { act } from "react-dom/test-utils";

describe("Price input test component", () => {

    //  <PriceInput name="from" min="10000" max="500000" label="From" value={values.from} onChange={handleChange} />

    it("should render the input label name", () => {
        act(() => {
            render(<PriceInput label="Form" />);
        });

        expect(screen.getByTestId("price-input").textContent).toBe("Form");
    });

})