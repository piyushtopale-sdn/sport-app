import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { get_settings, getAWA } from "../../context/actions/setting";


function Header() {
    const location = useLocation();
    const [collectionList, setCollectionList] = useState([]);


    useEffect(() => {
        dispatch(get_settings({}));
        dispatch(getAWA({}));
    }, []);
  

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-main">
                        <div className="header-logo">
                            <div
                                className="logo cursor-pointer"
                                onClick={() => {
                                    redirect("/");
                                    setPrimaryNav(false);
                                    document.body.classList.remove("menu-open-nav");
                                }}
                            >
                                <img src={Logo} alt="Logo" />
                            </div>
                        </div>
                        <div className="main-nav">
                            <ul>
                                {collectionList &&
                                    collectionList.map((collection, index) => (
                                        <li key={index}>
                                            <Link
                                                to={index ? "/moments" : "/"}
                                                className={
                                                    collection.id === collectionId
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() => {
                                                    handleCollectionDetails(collection);
                                                    setPrimaryNav(false);
                                                }}
                                            >
                                                {collection.name}
                                            </Link>
                                        </li>
                                    ))}
                                <li>
                                    <Link
                                        to="/roadmap"
                                        className={
                                            location.pathname === "/roadmap"
                                                ? "active"
                                                : ""
                                        }
                                        onClick={handleRemoveCollection}
                                    >
                                        ROADMAP
                                    </Link>{" "}
                                </li>
                                <li>
                                    <Link
                                        to="/faqs"
                                        className={
                                            location.pathname === "/faqs"
                                                ? "active"
                                                : ""
                                        }
                                        onClick={handleRemoveCollection}
                                    >
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
