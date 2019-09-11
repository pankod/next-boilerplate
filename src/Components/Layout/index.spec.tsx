import * as React from "react";
import { shallow } from "enzyme";

import { Layout } from "@Components";

describe("Layout", () => {
    it("should render without fail", () => {
        const wrapper = shallow(
            <Layout>
                <div>Content</div>
            </Layout>
        );

        expect(wrapper.find("div.layout").exists()).toBe(true);
    });
});
