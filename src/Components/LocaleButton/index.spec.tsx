import React from "react";
import { mountWithTheme } from "@Test/Helpers/styled";
import { LocaleButton } from "./index";

describe("Components", () => {
    describe("LocaleButton with isActive=true", () => {
        let number = 1;
        const wrapper = mountWithTheme(
            <LocaleButton
                lang="tr"
                isActive
                onClick={() => {
                    number += 1;
                }}
            />
        );

        it("should render without throwing error", () => {
            expect(wrapper.find("div.active").exists()).toBe(true);
        });

        it("should increment number on click", () => {
            wrapper.simulate("click");
            expect(number).toBe(2);
        });

        it("should render Button with lang", () => {
            expect(wrapper.childAt(0).props().children).toBe("tr");
        });
    });

    describe("LocaleButton with isActive=false", () => {
        it("should render without throwing error", () => {
            const wrapper = mountWithTheme(
                <LocaleButton lang="tr" isActive={false} onClick={() => true} />
            );
            expect(wrapper.find("div").length).toBe(1);
        });
    });
});
