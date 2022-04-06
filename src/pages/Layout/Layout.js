import {Outlet} from 'react-router-dom'
import {CssBaseline} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

const Layout = () => {
    return (
        <>
            <CssBaseline/>

            <Navbar/>

        </>
    );
};
export default Layout;
