import * as React from "react";

import { shallowWithTheme } from "@Test/Helpers/styled";
import { Layout } from "@Components";

describe("Layout", () => {
    it("should render without fail", () => {
        const wrapper = shallowWithTheme(
            <Layout>
                <div>Content</div>
            </Layout>
        );

        expect(wrapper.find("div.layout").exists()).toBe(true);
    });
});
