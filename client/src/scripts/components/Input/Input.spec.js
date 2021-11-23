import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

    it("updates on change", () => {
        const mockChange = jest.fn();

        act(() => {
            render(<Input inputName="name" onChange={mockChange}/>)
        });

        const input = screen.getByTestId("input-input");
        expect(input.value).toEqual("");
        
        fireEvent.change(input, { target: { value: "Test" } });
        expect(input.value).toBe("Test");
        
        expect(mockChange).toHaveBeenCalled();
    });
});