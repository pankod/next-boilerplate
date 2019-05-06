import * as React from "react";
import { shallow } from "enzyme";
import HomePage from "../home/index";

describe('HomePage', () => {

    it("should render without throwing an error", () => {
        let wrap = shallow(<HomePage />);
        expect(wrap).toBeTruthy();
    });
});