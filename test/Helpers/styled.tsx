import * as React from "react";
import { theme } from "@Definitions/Styled";
import { ThemeProvider } from "styled-components";
import { shallow, mount } from "enzyme";

export function mountWithTheme(child: React.ReactElement) {
    return mount(child, {
        wrappingComponent: ({ children }) => (
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ),
    });
}

export function shallowWithTheme(child: React.ReactElement) {
    return shallow(child, {
        wrappingComponent: ({ children }) => (
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ),
    });
}
