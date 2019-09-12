// #region Global Imports
import * as React from "react";
import { shallow } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Footer } from "@Components";
// #endregion Local Imports

describe("Footer", () => {
    it("should render without fail", () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper.find("div.footer").exists()).toBe(true);
    });
});
