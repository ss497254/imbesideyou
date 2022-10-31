import Testimonials from "components/About";
import React from "react";
import Hero from "../components/Hero";
import Message from "../components/Message";
import { News } from "../components/News";
import Team from "../components/Teams";
import NavBar from "../components/Layout/Navbar";

export default function Hello() {
    return (
        <>
            <NavBar />
            <Hero />
            <Message />
            <Testimonials />
            <News />
            <Team />
        </>
    );
}
