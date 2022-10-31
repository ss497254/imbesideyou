import Link from "next/link";
import React from "react";
import HeroBackground from "components/HeroBackground";

export const News = () => {
    const news = [
        {
            date: "2022.10.03",
            type: "【Articles】",
            title: "Jun Yokota, former Senior Executive Officer and SVP Corporate of Mercari, has been appointed as an advisor to I’mbesideyou Inc.",
        },
        {
            date: "2022.07.07",
            type: "【Articles】",
            title: "An practice of AstraZeneca was posted on the client site.",
        },
        {
            date: "2022.07.05",
            type: "【Articles】",
            title: "Mr. Yoichi Ito introduced our service on the Benesse Education Research Institute website.",
        },
        {
            date: "2022.06.12",
            type: "【Articles】",
            title: "Featured in Asahi Newspaper about recruiting activity in India.",
        },
        {
            date: "2022.02.03",
            type: "【Launch】",
            title: "Launch data-driven education improvement, indivizualized instruction, mental health care service at Musashino University.",
        },

        {
            date: "2022.01.31",
            type: "【News】",
            title: "Featured in the official SNS of the Government of Japan.",
        },

        {
            date: "2022.01.08",
            type: "【News】",
            title: 'Featured in Nikkei as "Born Global STARTup"',
        },

        {
            date: "2021.11.29 ",
            type: "【Events/Exhibitions】",
            title: "[Japan-India collaboration] MOU concluded with Indian Institute of Technology Hyderabad. Promoting joint research and co-creation in the fields of image, sound, psychology, and design.",
        },

        {
            date: "2021.10.20 ",
            type: "【Awards/Selection】",
            title: "Selected as 「J-Startup」,support program of Ministry of Economic,Trade and Industry.",
        },

        {
            date: "2021.10.11 ",
            type: "【News】",
            title: "Featured in Times of India about our collaboration with Mr.Anand Kumar.",
        },

        {
            date: "2021.10.06 ",
            type: "【Awards/Selection】",
            title: "Selected Finalists of Digital HR Competition 2021.",
        },
        {
            date: "2021.09.13",
            type: "【Certified】",
            title: "Certified ISMS(ISO27001) authentication.",
        },

        {
            date: "2021.08.16",
            type: "【Awards/Selection】",
            title: "Selected for Japan's Ministry of Economy,Trade and Industry's grant project \"Tobidase Japan\".",
        },

        {
            date: "2021.07.21",
            type: "【News】",
            title: 'Feautured in Nikkei about "UNION OF EMOTIONS"',
        },

        {
            date: "2021.07.19",
            type: "【Services】",
            title: '"UNION OF EMOTIONS" to deliver cheers from all over the world to athletes online on the opening day of the world\'s most attractive sporting event.',
        },

        {
            date: "2021.07.18",
            type: "【Awards/Selection】",
            title: "Won 1st prize at Asian qualifying of SDGs Business Contests 2021",
        },
    ];
    return (
        <>
            <HeroBackground />
            <div className="md:py-4 py-12" id="News">
                <h1 className="w-full text-center mb-16 mt-12 text-4xl font-bold">
                    News
                </h1>
                <div className="px-8 md:px-12 lg:px-16 text-justify mb-6 md:mb-8 max-w-6xl mx-auto">
                    {news.map((item, i) => (
                        <div
                            key={i}
                            className="text-sm min-h-[80px] lg:px-12 flex items-center w-full border border-gray-300 rounded border-l-4 border-l-blue-500 bg-white px-5 py-3 md:py-4 my-3"
                        >
                            <div className="hover:underline hover:cursor-pointer underline-offset-4">
                                <span className="font-semibold text-lg text-blue-500">
                                    {item.date}
                                </span>
                                <span className="font-semibold text-lg text-blue-500">
                                    {item.type}
                                </span>
                                {item.title}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end mb-16">
                        <Link href="#" as="#">
                            <div className="text-base md:text-md hover:cursor-pointer bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white rounded mt-6">
                                Read More
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
