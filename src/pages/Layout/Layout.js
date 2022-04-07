import {Outlet} from 'react-router-dom'
import {CssBaseline} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

const Layout = () => {
    return (
        <>
            <CssBaseline/>

            <Navbar/>
            <Outlet/>

        </>
    );
};
export default Layout;
