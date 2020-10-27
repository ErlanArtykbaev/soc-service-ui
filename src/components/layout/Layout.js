import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import InfoHeader from "./InfoHeader";

const Layout = props => {
    return (
        <>
            <InfoHeader/>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;