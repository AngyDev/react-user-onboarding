import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Checkbox from "./Checkbox";

describe("Checkbox test", () => {

    it("should return the label text", () => {
        act(() => {
            render(<Checkbox label="Single family"/>)
        });

        expect(screen.getByTestId("checkbox").textContent).toBe("Single family");
    });

    it("should return the name of the input", () => {
        act(() => {
            render(<Checkbox name="preferences"/>)
        });

        expect(screen.getByTestId("checkbox-input").getAttribute("name")).toBe("preferences");
    });
})