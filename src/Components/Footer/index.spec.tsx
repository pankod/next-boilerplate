// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { shallowWithTheme, mountWithTheme } from "@Test/Helpers/styled";
import { Footer } from "@Components";
// #endregion Local Imports

describe("Footer", () => {
    it("should render without fail", () => {
        const wrapper = shallowWithTheme(<Footer />);

        expect(wrapper.find("div.footer").exists()).toBe(true);
    });

    it("should match snapshot", () => {
        const wrapper = mountWithTheme(<Footer>Test</Footer>);
        expect(wrapper).toMatchSnapshot();
    });
});
