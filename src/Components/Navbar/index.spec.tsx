import * as React from "react";
import { shallow } from "enzyme";

import { Navbar } from "@Components";

describe("Navbar", () => {
    it("should render without fail", () => {
        const wrapper = shallow(<Navbar />);

        expect(wrapper.find("div.navbar").exists()).toBe(true);
    });
});
