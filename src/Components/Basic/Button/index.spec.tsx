// #region Global Imports
import React from "react";
import { shallow } from "enzyme";
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
            const wrapper = shallow(<Button onClick={() => number++}></Button>);

            wrapper.simulate("click");
            expect(number).toBe(2);
        });
    });
});
