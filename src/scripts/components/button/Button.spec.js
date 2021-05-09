import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import Button from "./Button";

describe("Button test", () => {

    afterEach(cleanup);

    it("should render the button with text", () => {
        const { getByText } = render(<Button text="Button" />);

        expect(getByText(/Button/i).textContent).toBe("Button");
    });

    it("should render the button without text", () => {
        const { getByTestId } = render(<Button />);

        expect(getByTestId("button").textContent).toBe("");
    });

    it("should render the button with left arrow", () => {
        const { getByTestId } = render(<Button arrow="left"/>);

        expect(getByTestId("button")).toContainHTML('<i class="icon-arrow-left" />')
    });

    it("should render the button with right arrow", () => {
        const { getByTestId } = render(<Button arrow="right"/>);

        expect(getByTestId("button")).toContainHTML('<i class="icon-arrow-right" />')
    });

    it("should render the button without arrow", () => {
        const { getByTestId } = render(<Button />);

        expect(getByTestId("button")).not.toContainHTML('<i class="icon-arrow-left" />')
    });

    it("should render the button as a link", () => {
        const { getByTestId } = render(<Button typeClass="link" />);

        expect(getByTestId("button").classList.contains("link")).toBeTruthy();
    });

    it("should render the button as a button", () => {
        const { getByTestId } = render(<Button typeClass="button-link" />);

        expect(getByTestId("button").classList.contains("button-link")).toBeTruthy();
    });

    it("should render the button without type", () => {
        const { getByTestId } = render(<Button text="Button" arrow="left"/>);

        expect(getByTestId("button").classList.contains(undefined)).toBeTruthy();
    });

    it("should render the button with form", () => {
        const { getByTestId } = render(<Button text="Button" arrow="left" form="form-id"/>);

        expect(getByTestId("button").getAttribute("form")).toBe("form-id");
    });
})