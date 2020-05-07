import * as React from "react";

import { LayoutProps } from "./Layout";

export const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
    <div className="layout">{children}</div>
);
