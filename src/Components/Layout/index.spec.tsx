import * as React from "react";

import { render } from "@Test/utils";
import { Layout } from "@Components";

describe("Layout", () => {
    it("should render without fail", () => {
        const { container } = render(
            <Layout>
                <div>Content</div>
            </Layout>
        );

        expect(container).toMatchSnapshot();
    });
});
