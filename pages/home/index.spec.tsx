import * as React from "react";
import { shallow, mount } from "enzyme";
import HomePage from "../home/index";

import { Provider } from 'react-redux';

import initStore from '@Redux/store';


describe('HomePage', () => {

    it("should render without throwing an error", () => {
        let wrap = shallow(<HomePage />);
        expect(wrap).toBeTruthy();
    });

    it("should render without throwing an error", () => {
        let wrap = mount(
            <Provider store={initStore()}>
                <HomePage />
            </Provider>
        );

        expect(wrap.find('.title')).toHaveLength(2);
    });
});