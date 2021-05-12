import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import ContactDetails from "./ContactDetails";

describe("Contact details test", () => {

    afterEach(cleanup);
    
    /**
     * Render the contact details component
     * @returns The render of the contact details component
     */
     function renderContactDetails() {
        return render(
                <ContactDetails />
        );
    }
    
    it("should render the contact component", () => {
        renderContactDetails();
        expect(screen.getByTestId("contact")).toBeInTheDocument();
        
    });

    it("should render the form in the component", () => {
        renderContactDetails();
        expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    });

    it("should render the full name label in the component", () => {
        renderContactDetails();
        expect(screen.getByText("Full name")).toBeInTheDocument();
    });
});