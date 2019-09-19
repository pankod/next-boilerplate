// #region Global Imports
import React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";
// #endregion Global Imports

// #region Local Imports
import { Button } from "./index";
// #endregion Local Imports

describe("Basic Components", () => {
    describe("Button", () => {
        it("should have the passed class", () => {
            const wrapper = shallow(<Button className="active" />);

            expect(wrapper.hasClass("active")).toBe(true);
        });

        it("should render with children prop", () => {
            const wrapper = shallow(<Button>hey</Button>);

            expect(wrapper.props().children).toBe("hey");
        });

        it("should increment number on click", () => {
            let number = 1;
            const wrapper = shallow(
                <Button
                    onClick={() => {
                        number += 1;
                    }}
                />
            );

            wrapper.simulate("click");
            expect(number).toBe(2);
        });

        it("should match snapshot", () => {
            const wrapper = mount(<Button>Test</Button>);
            expect(wrapper).toMatchSnapshot();
        });

        it("should be disabled", () => {
            const wrapper = mount(<Button disabled={true}>Test</Button>);
            expect(wrapper).toHaveStyleRule("cursor", "not-allowed");
        });

        it("should be enabled", () => {
            const wrapper = mount(<Button disabled={false}>Test</Button>);
            expect(wrapper).toHaveStyleRule("cursor", "pointer");
        });
    });
});
