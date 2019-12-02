// #region Global Imports
import React from "react";
import { shallow } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { mountWithTheme, shallowWithTheme } from "@Test/Helpers/styled";
import { theme } from "@Definitions/Styled/theme";
import { Button } from "./index";
// #endregion Local Imports

describe("Basic Components", () => {
    describe("Button", () => {
        it("should have the passed class", () => {
            const wrapper = shallowWithTheme(<Button className="active" />);

            expect(wrapper.hasClass("active")).toBe(true);
        });

        it("should render with children prop", () => {
            const wrapper = shallow(<Button>hey</Button>);

            expect(wrapper.props().children).toBe("hey");
        });

        it("should increment number on click", () => {
            let number = 1;
            const wrapper = shallowWithTheme(
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
            const wrapper = mountWithTheme(<Button>Test</Button>);
            expect(wrapper).toMatchSnapshot();
        });

        it("should be disabled", () => {
            const wrapper = mountWithTheme(<Button disabled>Test</Button>);
            expect(wrapper).toHaveStyleRule("cursor", "not-allowed");
        });

        it("should be enabled", () => {
            const wrapper = mountWithTheme(
                <Button disabled={false}>Test</Button>
            );
            expect(wrapper).toHaveStyleRule("cursor", "pointer");
        });

        it("should have primary color", () => {
            const wrapper = mountWithTheme(<Button>Test</Button>);
            expect(wrapper).toHaveStyleRule("color", theme.colors.primary);
        });
    });
});
