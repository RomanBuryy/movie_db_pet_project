import React from 'react';
import {makeStyles} from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";
import {Outlet} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none",
        color: "#fff"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    menu: {
        display: "flex",
        justifyContent: "space-evenly",

        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },
    menuItem: {
        marginRight: theme.spacing(40)
    }
}));

const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant={"h4"}>
                        Netflik
                    </Typography>

                    <div className={classes.menu}>
                        <MenuItem className={classes.menuItem}>
                            <Link className={classes.link} to={'/'}>Movies</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className={classes.link} to={'genres'}>Genres</Link>
                        </MenuItem>
                    </div>
                    <AccountCircleIcon/>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>


    );
};

export default Navbar;