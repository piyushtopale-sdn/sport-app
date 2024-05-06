import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import { useSelector } from 'react-redux';
import Header from '../Navbar/Header';
import Footer from '../Footer/Footer'

const PrivateLayout = ({ children }) => {
    LoadingOverlay.propTypes = undefined;
    let navigate = useNavigate();
    let location = useLocation();
    const loading = useSelector(state => state.user.isLoading);
    let { token, user } = useSelector(state => state.user);
    if (!token || !user){
        if(location.pathname.startsWith("/my-bids"))
        {
            navigate('/', {state:{login: true}});
        }
        else{
            navigate('/');
        }
    } 
    return (
        <>
            <Header />
            <LoadingOverlay
                active={loading && loading !== undefined ? true : false}
                spinner={true}
                text=''
            >
                {token ? children : null}
            </LoadingOverlay>
            <Footer />
        </>
    )
}

export default PrivateLayout
