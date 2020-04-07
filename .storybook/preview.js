// #region Global Imports
import { addDecorator, addParameters } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
// #endregion Global Imports

// #region Local Imports
import {theme} from "@Defintions/Styled"
import {withRedux, withI18next} from "./Decorators"
// #endregion Local Imports

addDecorator(withThemesProvider([{name: "light", ...theme}]));
addDecorator(withKnobs);
addDecorator(withRedux());
addDecorator(withI18next());

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});