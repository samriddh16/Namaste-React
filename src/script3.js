import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));


const Footer = () => {
    return (
        <>
            <p className="footer">Footer</p>
        </>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Head />
            <Body />
            <Footer />
        </div>
    );
};

root.render(<AppLayout />);