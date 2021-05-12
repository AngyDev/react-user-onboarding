import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Radiobox from "./Radiobox";

describe("Radiobox test ", () => {
    it("should return the label text", () => {
        act(() => {
            render(<Radiobox label="Yes"/>)
        });

        expect(screen.getByTestId("radiobox").textContent).toBe("Yes");
    });

    it("should return the radio name", () => {
        act(() => {
            render(<Radiobox name="radio"/>)
        });

        expect(screen.getByTestId("radio-input").getAttribute("name")).toBe("radio");
    });

    it("should return the value of the radio", () => {
        act(() => {
            render(<Radiobox value={true}/>)
        });

        expect(screen.getByTestId("radio-input").getAttribute("value")).toBe("true");
    });

    /*it("should return the checked", () => {
        const onChange = jest.fn();
        act(() => {
            render(<Radiobox checked={true} onChange={onChange}/>)
        });

        expect(screen.getByTestId("radio-input").getAttribute("checked")).toBe("true");
    });*/
})