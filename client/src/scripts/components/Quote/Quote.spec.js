import React from "react";
import { render, cleanup } from "@testing-library/react";
import Quote from "./Quote";

afterEach(cleanup);

it("Render quote component", () => {
    const { getByTestId } = render(<Quote text="text of the quote box" authorName="Author of the quote" authorRole="Role of the author"/>);

    expect(getByTestId("quote-text").textContent).toBe("text of the quote box");
    expect(getByTestId("quote-author").textContent).toBe("Author of the quote");
    expect(getByTestId("quote-author-role").textContent).toBe("Role of the author");
    
})