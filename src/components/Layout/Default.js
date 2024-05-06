import React from 'react'
import LoadingOverlay from 'react-loading-overlay';
import { useSelector } from 'react-redux';
import Header from '../Navbar/Header';
import Footer from '../Footer/Footer'

const DefaultLayout = ({ children }) => {
    const loading = useSelector(state => state.user.isLoading);
    LoadingOverlay.propTypes = undefined;
    return (
        <>
        <Header />
            <LoadingOverlay
                active={loading && loading !== undefined ? true : false}
                spinner={true}
                text=''
            >
                {children}
            </LoadingOverlay>
            <Footer />
        </>
    )
}

export default DefaultLayout