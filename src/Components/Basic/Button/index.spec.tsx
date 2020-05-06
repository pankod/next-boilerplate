// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render, fireEvent } from "@Test/utils";
import { theme } from "@Definitions/Styled/theme";
import { Button } from "./index";
// #endregion Local Imports

describe("Basic Components", () => {
    describe("Button", () => {
        it("should have the passed class", () => {
            const { container } = render(<Button className="active" />);

            expect(container.firstChild).toHaveClass("active");
        });

        it("should render with children prop", () => {
            const { getByText } = render(<Button>hey</Button>);

            expect(getByText("hey")).toBeTruthy();
        });

        it("should increment number on click", () => {
            let number = 1;
            const { getByText } = render(
                <Button
                    onClick={() => {
                        number += 1;
                    }}
                >
                    Button
                </Button>
            );

            fireEvent.click(getByText("Button"), new MouseEvent("click"));

            expect(number).toBe(2);
        });

        it("should match snapshot", () => {
            const { container } = render(<Button>Test</Button>);

            expect(container).toMatchSnapshot();
        });

        it("should be disabled", () => {
            const { container } = render(<Button disabled>Test</Button>);

            expect(container.firstChild).toHaveStyleRule(
                "cursor",
                "not-allowed"
            );
        });

        it("should be enabled", () => {
            const { container } = render(
                <Button disabled={false}>Test</Button>
            );

            expect(container.firstChild).toHaveStyleRule("cursor", "pointer");
        });

        it("should have primary color", () => {
            const { container } = render(<Button>Test</Button>);

            expect(container.firstChild).toHaveStyleRule(
                "color",
                theme.colors.primary
            );
        });
    });
});
