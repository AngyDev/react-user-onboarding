import React from "react";
import { render, screen } from "@testing-library/react";
import PriceInput from "./PriceInput";
import { act } from "react-dom/test-utils";
import { TranslationContext } from "../../context/TranslationContext";
import translations from "../../translations/translations.json";

describe("Price input test component", () => {

    //  <PriceInput name="from" min="10000" max="500000" label="From" value={values.from} onChange={handleChange} />

    it("should render the input label name", () => {
        act(() => {
            render(
                <TranslationContext.Provider value={[translations.english]}>
                    <PriceInput label="From" />
                </TranslationContext.Provider>
            );
        });

        expect(screen.getByTestId("price-input").textContent).toBe("From");
    });

})