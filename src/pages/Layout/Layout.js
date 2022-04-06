import {Outlet, Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import {CssBaseline} from "@mui/material";


const Layout = () => {

    return (
        <>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar sx={{display: "flex", justifyContent: 'center', flexWrap: 'wrap'}}>
                    <MenuItem sx={{marginRight: '20px'}}>
                        <Link style={{textDecoration: "none", color: "#fff"}} to={'/'}>Movies</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link style={{textDecoration: "none", color: "#fff"}} to={'genres'}>Genres</Link>
                    </MenuItem>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>

    );
};
export default Layout;
