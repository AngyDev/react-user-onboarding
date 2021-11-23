import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

describe("App component test", () => {

    afterEach(cleanup);

    it("should the app container class", () => {

        const {container} = render(<App></App>)

        expect(container.firstChild.classList.contains("app-container")).toBeTruthy();
    });

    it("should render the sidebar component", () => {

        const {getByTestId} = render(<App></App>)

        expect(getByTestId("sidebar")).toBeInTheDocument();
    });

    it("should render the main component", () => {

        const {getByTestId} = render(<App></App>)

        expect(getByTestId("main")).toBeInTheDocument();
    });
})