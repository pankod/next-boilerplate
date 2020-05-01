import React from "react";
import { render } from "@Test/utils";
import { LocaleButton } from "./index";

describe("Components", () => {
    describe("LocaleButton with isActive=true", () => {
        const { container } = render(
            <LocaleButton lang="tr" isActive onClick={() => {}} />
        );

        it("should match snapshot", () => {
            expect(container).toMatchSnapshot();
        });
    });

    describe("LocaleButton with isActive=false", () => {
        const { container } = render(
            <LocaleButton lang="tr" isActive={false} onClick={() => {}} />
        );

        it("should match snapshot", () => {
            expect(container).toMatchSnapshot();
        });
    });
});
