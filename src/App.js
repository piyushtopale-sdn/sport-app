import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import routers from './routers';
import { useIdleTimer } from 'react-idle-timer';
import { useDispatch } from "react-redux";
import { user_signout } from "./context/actions/user";
import { useBeforeunload } from 'react-beforeunload';
import { useSelector } from "react-redux";

import './App.css';

import CookieConsent, { Cookies } from "react-cookie-consent";

const App = () => {
    const dispatch = useDispatch();
    const isBrowserClose = useSelector((state) => state.user.isBrowserClose);
    const handleOnIdle = async event => {
        dispatch(user_signout());
    }

    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: 1000 * 60 * 30, //30 Min
        onIdle: handleOnIdle,
        // onActive: handleOnActive,
        // onAction: handleOnAction,
        debounce: 500
    })


    useEffect(() => {
        if (isBrowserClose) {
        }

    }, []);

    useBeforeunload((event) => {
    
    });

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {routers && routers.length ? routers.map((route, idx) => {
                        return (
                            <Route
                                exact={route.exact ? true : false}
                                key={idx}
                                path={route.path}
                                element={
                                    <route.layout>
                                        {route.component}
                                    </route.layout>
                                }
                            />
                        )
                    }) : null}
                </Routes>
                <ToastContainer autoClose={4000} />
            </BrowserRouter>
        
        </>
    )
}

export default App;