import * as React from "react";

import { NavbarProps } from "./Navbar";

const Navbar: React.FunctionComponent<NavbarProps> = (
    props: NavbarProps
): JSX.Element => {
    return <div className="navbar">Navbar</div>;
};

export { Navbar };
