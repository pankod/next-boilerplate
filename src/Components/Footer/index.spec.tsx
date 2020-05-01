// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { Footer } from "@Components";
// #endregion Local Imports

describe("Footer", () => {
    it("should match snapshot", () => {
        const { container } = render(<Footer>Test</Footer>);

        expect(container).toMatchSnapshot();
    });
});
