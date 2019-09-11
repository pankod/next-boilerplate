import * as React from "react";

import { LayoutProps } from "./Layout";

const Layout: React.FunctionComponent<LayoutProps> = (
    props: LayoutProps
): JSX.Element => {
    return <div className="layout">{props.children}</div>;
};

export { Layout };
