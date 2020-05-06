import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { theme } from "@Definitions/Styled";
import { ThemeProvider } from "styled-components";

const Providers = ({ children }: { children: React.ReactElement }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: Providers as React.ComponentType, ...options });

export * from "@testing-library/react";
export { customRender as render };
