// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { Heading } from "@Components";
// #endregion Local Imports

describe("Components", () => {
    describe("Heading", () => {
        it("should render given text", () => {
            const { getAllByText } = render(<Heading text="Render Me!" />);

            expect(getAllByText("Render Me!").length).toEqual(2);
        });

        it("should match snapshot", () => {
            const { container } = render(<Heading text="Test" />);

            expect(container).toMatchSnapshot();
        });
    });
});
