import * as React from "react";

import { mountWithTheme, shallowWithTheme } from "@Test/Helpers/styled";
import { Navbar } from "@Components";

describe("Navbar", () => {
    it("should render without fail", () => {
        const wrapper = shallowWithTheme(<Navbar />);

        expect(wrapper.find("div.navbar").exists()).toBe(true);
    });

    it("should match snapshot", () => {
        const wrapper = mountWithTheme(<Navbar />);
        expect(wrapper).toMatchSnapshot();
    });
});
