// #region Global Imports
import * as React from "react";
import { shallow, mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Footer } from "@Components";
import { execOnce } from "next-server/dist/lib/utils";
// #endregion Local Imports

describe("Footer", () => {
    it("should render without fail", () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper.find("div.footer").exists()).toBe(true);
    });

    it("should match snapshot", () => {
        const wrapper = mount(<Footer>Test</Footer>);
        expect(wrapper).toMatchSnapshot();
    });
});
