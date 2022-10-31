import React from "react";

export default function Hero() {
    return (
        <div id="Home" className="min-h-screen scroll-m-32 bg-white">
            <div className="max-w-6xl rounded-2xl bg-blue-50 mx-auto">
                <div id="Clouds">
                    <div className="Cloud Foreground"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Foreground"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Foreground"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Foreground"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Background"></div>
                </div>
                <div className="flex flex-col max-w-5xl px-12 py-20 mx-auto justify-center items-start mb-12 mt-28">
                    <h2 className="font-semibold w-full text-center text-blue-500 text-3xl lg:text-5xl mb-8">
                        We’ll keep challenging until the whole society become a
                        school.
                    </h2>
                    <p className="leading-8 text-center px-20">
                        A society, where all people respect each other and where
                        every encounter is a learning experience. That is our
                        ideal. We will create a society, where the children can
                        live their lives as they are, by visualizing that each
                        person is a unique and irreplaceable individual through
                        AI that is closer to people than people. We continue to
                        challenge ourselves every day to turn the suffering of
                        COVID-19 into the joy of the next generation.
                    </p>
                    <div className="flex justify-center w-full gap-8 pt-8">
                        <a
                            href="/Contact"
                            className="cta-btn py-4 text-center w-56"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#about"
                            className="cta-btn py-4 text-center w-56"
                        >
                            Document Download
                        </a>
                    </div>
                </div>
            </div>
            <img
                src="/hero-bg.png"
                className="max-w-[90vw] lg:max-w-[75vw] mx-auto"
            />
            <div className="text-center mb-3 mt-8 text-2xl text-gray-700">
                Established on June 25, 2020, applied for 119 international
                patents
            </div>
            <div className="text-center font-light text-2xl text-gray-700">
                I'm beside you enables online communication tailored to each
                <br />
                individual's personality.
            </div>
            <div className="flex justify-center my-12 flex-wrap gap-6">
                <img src="/0.webp" className="h-28" />
                <img src="/1.webp" className="h-28" />
                <img src="/2.webp" className="h-28" />
                <img src="/3.webp" className="h-28" />
                <img src="/4.webp" className="h-28" />
                <img src="/5.webp" className="h-28" />
            </div>
        </div>
    );
}
