import React from 'react';
import { mount } from 'enzyme';
import { LocaleButton } from './index';

describe("Components", () => {
    describe("LocaleButton", () => {
        let number = 1;
        const wrapper = mount(<LocaleButton lang="tr" isActive={true} onClick={() => number++} />);

        it("should render without throwing error", () => {
            expect(wrapper.find('div.active').exists()).toBe(true);
        });

        it("should increment number on click", () => {
            wrapper.simulate('click');
            expect(number).toBe(2);
        });

        it("should render Button with lang", () => {
            expect(wrapper.childAt(0).props().children).toBe('tr');
        });
    });
});