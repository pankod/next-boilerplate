---
id: storybook
title: Storybook
sidebar_label: Storybook
---

Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.

Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.

You can start using storybook component with creating a file name like
Stories are easier to maintain when they are located alongside the components they document.

Example Storybook component from next-boilerplate.

`src/Components/Basic/Button/Button.stories.tsx`

```js
// #region Global Imports
import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// #endregion Global Imports

// #region Local Imports
import { Apod, ApodButton } from "@Styled/Home";
import { Button } from "./index";
// #endregion Local Imports

export default {
    component: Button,
    title: "Button",
};

export const Default = () => (
    <Apod>
        <ApodButton>
            <Button
                disabled={boolean("Disabled", false)}
                onClick={action("button-click")}
            >
                Hello Button
            </Button>
        </ApodButton>
    </Apod>
);

```
We added addon-knobs to show how to use of dynamic variables. You are free to omit knobs if you don't need to use.

>Refer to [github repo](https://github.com/storybookjs/storybook/tree/master/addons/knobs) for detailed usage of knobs.


Run your storybook with 
`npm run storybook`

Storybook should start, on a random open port in dev-mode.


Now you can develop your components and write stories and see the changes in Storybook immediately since it uses Webpack’s hot module reloading.

>Refer to [official documentation](https://https://storybook.js.org) for detailed usage of Storybook.