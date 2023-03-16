import { AppBar, Toolbar } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
// import MyBreadcrumb from "./MyBreadcrumb";
import { Link } from "gatsby";
import React from "react";

const MyNavbar = () => {
    const actions = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Research",
            path: "/research"
        }
    ]
    return (
        <AppBar className="py-0">
            <Toolbar>
                <Link to="/home">
                    <HouseIcon />
                </Link>
                {actions.map(e => <Link to={e.path}>{e.name}</Link>)}
                <div className="me-auto">
                    {/* <MyBreadcrumb /> */}
                </div>
            </Toolbar>

        </AppBar>
    )
}

export default MyNavbar;