import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {theme} from './theme/theme'

import './index.css';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {Provider} from "react-redux"
import store from "./store/store";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>

            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

