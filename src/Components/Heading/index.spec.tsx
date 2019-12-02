// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { shallowWithTheme, mountWithTheme } from "@Test/Helpers/styled";
import { Heading } from "@Components";
// #endregion Local Imports

describe("Components", () => {
    describe("Heading", () => {
        it("should render without throwing an error", () => {
            const wrap = shallowWithTheme(<Heading text="World" />);

            expect(wrap.find("div.title").exists()).toBe(true);
        });

        it("should match snapshot", () => {
            const wrapper = mountWithTheme(<Heading text="Test" />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
