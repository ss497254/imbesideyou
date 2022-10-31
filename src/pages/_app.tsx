import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React from "react";
import "../styles/globals.css";
import Footer from "../components/Layout/Footer";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>English | I'mbesideyou</title>
                <link
                    rel="icon"
                    href="/~rait/favicon.png"
                    type="image/x-icon"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
                />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
