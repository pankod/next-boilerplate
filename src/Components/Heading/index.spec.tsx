// #region Global Imports
import * as React from "react";
import { shallow, mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Heading } from "@Components";
// #endregion Local Imports

describe("Components", () => {
    describe("Heading", () => {
        it("should render without throwing an error", () => {
            const wrap = shallow(<Heading text="World" />);

            expect(wrap.find("div.title").exists()).toBe(true);
        });

        it("should match snapshot", () => {
            const wrapper = mount(<Heading text="Test" />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
