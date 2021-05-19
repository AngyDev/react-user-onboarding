import React from "react";
import { cleanup, render } from "@testing-library/react";

import ChecklistItem from "./ChecklistItem";

afterEach(cleanup);

describe("ChecklistItem test", () => {
    it("should render the checklist item active", () => {

        const { getByTestId } = render(<ChecklistItem active={true} />);

        expect(getByTestId("checklist-li").classList.contains("active")).toBeTruthy();

    });

    it("should render the checklist item not active", () => {

        const { getByTestId } = render(<ChecklistItem active={false} />);

        expect(getByTestId("checklist-li").classList.contains("active")).toBeFalsy();

    });

    it("should render the checklist item title", () => {

        const { getByTestId } = render(<ChecklistItem stepTitle="Contact details" />);

        expect(getByTestId("checklist-title").textContent).toBe("Contact details");
    });

    it("should render the checklist item line", () => {
        // queryByTestId matching node for a query, and return null if no elements match 
        const { queryByTestId } = render(<ChecklistItem lastTitle={false} />);

        expect(queryByTestId("checklist-line")).toBeTruthy();
    });

    it("should not render the checklist item line", () => {

        const { queryByTestId } = render(<ChecklistItem lastTitle={true} />);

        expect(queryByTestId("checklist-line")).toBe(null);
    });
})