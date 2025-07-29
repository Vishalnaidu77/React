import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";    
import Home from "./Components/Home/Home";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;