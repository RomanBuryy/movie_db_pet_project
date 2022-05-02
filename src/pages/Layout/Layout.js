import {Outlet} from 'react-router-dom'
import {Container, CssBaseline} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

import Navbar from "../../components/Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(15)

        }
    },
}))

const Layout = () => {

    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <Navbar/>
            <Container className={classes.container}>
                <Outlet/>
            </Container>
        </>
    );
};

export default Layout;
