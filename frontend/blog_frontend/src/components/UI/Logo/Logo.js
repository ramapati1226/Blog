import React from "react";
import { Link } from "react-router-dom";

import cssClass from "./Logo.css";

const logo = () => (
    <Link style={{ textDecoration: "none" }} to="/">
        {" "}
        <span className={cssClass.Logo}>FATMUG</span>
    </Link>
);

export default logo;
