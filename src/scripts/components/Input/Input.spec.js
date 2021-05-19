import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";
import { act } from "react-dom/test-utils";

describe("Input test component", () => {

    it("should render the input label name", () => {
        act(() => {
            render(<Input label="Name" />);
        });

        expect(screen.getByTestId("input").textContent).toBe("Name");
    });

    it("should return the name of the input", () => {
        act(() => {
            render(<Input inputName="name"/>)
        });

        expect(screen.getByTestId("input-input").getAttribute("name")).toBe("name");
    });
})