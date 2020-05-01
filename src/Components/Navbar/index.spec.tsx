import * as React from "react";

import { render } from "@Test/utils";
import { Navbar } from "@Components";

describe("Navbar", () => {
    it("should render without fail", () => {
        const { getByText } = render(<Navbar />);

        expect(getByText("Navbar")).toBeTruthy();
    });

    it("should match snapshot", () => {
        const { container } = render(<Navbar />);

        expect(container).toMatchSnapshot();
    });
});
