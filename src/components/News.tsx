import Link from "next/link";
import React from "react";

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
    ];
    return (
        <div className="md:py-4 bg-emerald-300 py-12" id="News">
            <h1 className="w-full text-center mt-16 mb-12 text-4xl font-bold">
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
                    <Link href="/news" as="news">
                        <div className="text-base md:text-md hover:cursor-pointer bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white rounded mt-6">
                            Read More
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
