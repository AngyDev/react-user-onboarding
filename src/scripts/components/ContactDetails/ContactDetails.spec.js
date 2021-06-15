import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Input from "../Input/Input";
import ContactDetails from "./ContactDetails";
import { StepContext } from "../../context/StepContext";
import { TranslationContext } from "../../context/TranslationContext";
import translations from "../../translations/translations.json";

describe("Contact details test", () => {

    afterEach(cleanup);

    /**
     * Render the contact details component
     * @returns The render of the contact details component
     */
    function renderContactDetails(step, translation) {
        return render(
            <StepContext.Provider value={[step]}>
                <TranslationContext.Provider value={[translation]}>
                    <ContactDetails />
                </TranslationContext.Provider>
            </StepContext.Provider>
        );
    }

    it("should render the contact component", () => {
        renderContactDetails(1, translations.english);
        expect(screen.getByTestId("contact")).toBeInTheDocument();

    });

    it("should render the form in the component", () => {
        renderContactDetails(1, translations.english);
        expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    });

    it("should render the full name label in the component", () => {
        renderContactDetails(1, translations.english);
        expect(screen.getByText("Full name")).toBeInTheDocument();
    });

    it("should render three input field", () => {
        renderContactDetails(1, translations.english);
        expect(screen.queryAllByTestId("input")).toHaveLength(3);
    });

    it("should render name field", () => {
        renderContactDetails(1, translations.english);
        expect(screen.getByText("Full name")).toBeTruthy();
    });

    it("change value on input change", () => {
        renderContactDetails(1, translations.english);
        const input = screen.getByLabelText(/name/i);
        const inputValue = "Angela";

        expect(input.value).toEqual("");

        fireEvent.change(input, { target: { value: inputValue } });

        expect(input.value).toBe("Angela");
    });

});