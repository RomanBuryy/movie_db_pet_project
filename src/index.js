import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {theme} from './theme/theme'

import './index.css';
import App from './App';
import {ThemeProvider} from "@mui/material";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>

        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

