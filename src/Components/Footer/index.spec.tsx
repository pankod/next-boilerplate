import * as React from "react";
import { shallow } from "enzyme";

import { Footer } from "@Components";

describe("Footer", () => {
    it("should render without fail", () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper.find("div.footer").exists()).toBe(true);
    });
});
