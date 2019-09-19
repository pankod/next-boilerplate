import * as React from "react";
import { shallow, mount } from "enzyme";

import { Navbar } from "@Components";

describe("Navbar", () => {
    it("should render without fail", () => {
        const wrapper = shallow(<Navbar />);

        expect(wrapper.find("div.navbar").exists()).toBe(true);
    });

    it("should match snapshot", () => {
        const wrapper = mount(<Navbar />);
        expect(wrapper).toMatchSnapshot();
    });
});
