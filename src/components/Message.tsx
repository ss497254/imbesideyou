import React from "react";

export default function Message() {
    return (
        <section
            id="Message"
            className="relative z-20 overflow-hidden bg-emerald-400 pt-[70px] pb-10 lg:pt-[80px] lg:pb-20"
        >
            <div className="max-w-6xl mx-auto">
                <div className="w-full px-6">
                    <div className="mb-12 lg:mb-16">
                        <h2 className="mb-4 text-4xl md:text-5xl font-semibold text-gray-900">
                            Message
                        </h2>
                    </div>
                </div>
                <div className="flex flex-wrap py-16 justify-evenly bg-white items-center">
                    <div className="w-full px-8 lg:w-7/12 text-md text-justify">
                        <span className="font-semibold text-4xl text-emerald-400">
                            On an endless journey to design, learn and inspire
                        </span>
                        <br />
                        <br />
                        <br />
                        I was born as the third son of a civil servant couple in
                        a country town, studied at a public elementary school,
                        junior high school, high school and university, worked
                        for a company as an office worker, and have lived an
                        ordinary life.
                        <br />
                        <br />
                        We all three quit our jobs at NTTDATA, a large
                        corporation, and started this company. This was because
                        we had a strong desire to change the world's standard of
                        measurement to something that suits the individuality of
                        each person, not just test scores. For the sake of our
                        children, we will change this society into a school,
                        where each individual is accepted, respected, and
                        learned from.
                        <br />
                        <span className="font-semibold text-lg">
                            We will keep challenging ourselves until we turn the
                            whole society into a school.
                        </span>
                    </div>
                    <div className="w-full relative lg:w-fit px-4">
                        <div className="w-fit mx-auto pb-12">
                            <AboutImg />
                        </div>
                        <div className="bg-blue-400 absolute w-72 font-semibold -right-16 p-2 px-4 text-white">
                            Shozo Kamiya
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const AboutImg = () => {
    return (
        <div className="w-full px-4 md:px-0 text-blue-500">
            <div className="relative z-10">
                <img
                    src="/message.webp"
                    alt="hero"
                    className="rounded-lg max-h-[475px] hover:scale-105 duration-500"
                />
                <div className="absolute -bottom-6 -left-6 z-[-1] fill-current">
                    <svg
                        width="200"
                        height="159"
                        viewBox="0 0 134 106"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="1.66667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                        />
                        <circle
                            cx="16.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                        />
                        <circle
                            cx="31"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                        />
                        <circle
                            cx="45.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                        />
                        <circle
                            cx="60.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 60.3333 104)"
                        />
                        <circle
                            cx="88.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                        />
                        <circle
                            cx="117.667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                        />
                        <circle
                            cx="74.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                        />
                        <circle
                            cx="103"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                        />
                        <circle
                            cx="132"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                        />
                        <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                        />
                        <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                        />
                        <circle
                            cx="31"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                        />
                        <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                        />
                        <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                        />
                        <circle
                            cx="103"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                        />
                        <circle
                            cx="132"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                        />
                        <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                        />
                        <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                        />
                        <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                        />
                        <circle
                            cx="31"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                        />
                        <circle
                            cx="31"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                        />
                        <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                        />
                        <circle
                            cx="60.3333"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 60.3333 31.0001)"
                        />
                        <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                        />
                        <circle
                            cx="88.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 88.6667 31.0001)"
                        />
                        <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                        />
                        <circle
                            cx="117.667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 117.667 31.0001)"
                        />
                        <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                        />
                        <circle
                            cx="74.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 74.6667 31.0001)"
                        />
                        <circle
                            cx="103"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                        />
                        <circle
                            cx="103"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 103 31.0001)"
                        />
                        <circle
                            cx="132"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                        />
                        <circle
                            cx="132"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 132 31.0001)"
                        />
                        <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                        />
                        <circle
                            cx="1.66667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3336)"
                        />
                        <circle
                            cx="31"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                        />
                        <circle
                            cx="31"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 31 16.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3336)"
                        />
                        <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3336)"
                        />
                        <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                        />
                        <circle
                            cx="88.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3336)"
                        />
                        <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                        />
                        <circle
                            cx="117.667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3336)"
                        />
                        <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                        />
                        <circle
                            cx="74.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3336)"
                        />
                        <circle
                            cx="103"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                        />
                        <circle
                            cx="103"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 103 16.3336)"
                        />
                        <circle
                            cx="132"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                        />
                        <circle
                            cx="132"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 132 16.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                        />
                        <circle
                            cx="16.3333"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                        />
                        <circle
                            cx="31"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 31 45.3336)"
                        />
                        <circle
                            cx="31"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                        />
                        <circle
                            cx="45.6667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                        />
                        <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                        />
                        <circle
                            cx="60.3333"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66707)"
                        />
                        <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66707)"
                        />
                        <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66707)"
                        />
                        <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66707)"
                        />
                        <circle
                            cx="103"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                        />
                        <circle
                            cx="103"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 103 1.66707)"
                        />
                        <circle
                            cx="132"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                        />
                        <circle
                            cx="132"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 132 1.66707)"
                        />
                    </svg>
                </div>
                <div className="absolute -top-6 -right-6 z-[-1] fill-current">
                    <svg
                        width="200"
                        height="159"
                        viewBox="0 0 134 106"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="1.66667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                        />
                        <circle
                            cx="16.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                        />
                        <circle
                            cx="31"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                        />
                        <circle
                            cx="45.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                        />
                        <circle
                            cx="60.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 60.3333 104)"
                        />
                        <circle
                            cx="88.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                        />
                        <circle
                            cx="117.667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                        />
                        <circle
                            cx="74.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                        />
                        <circle
                            cx="103"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                        />
                        <circle
                            cx="132"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                        />
                        <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                        />
                        <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                        />
                        <circle
                            cx="31"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                        />
                        <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                        />
                        <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                        />
                        <circle
                            cx="103"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                        />
                        <circle
                            cx="132"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                        />
                        <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                        />
                        <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                        />
                        <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                        />
                        <circle
                            cx="31"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                        />
                        <circle
                            cx="31"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                        />
                        <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                        />
                        <circle
                            cx="60.3333"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 60.3333 31.0001)"
                        />
                        <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                        />
                        <circle
                            cx="88.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 88.6667 31.0001)"
                        />
                        <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                        />
                        <circle
                            cx="117.667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 117.667 31.0001)"
                        />
                        <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                        />
                        <circle
                            cx="74.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 74.6667 31.0001)"
                        />
                        <circle
                            cx="103"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                        />
                        <circle
                            cx="103"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 103 31.0001)"
                        />
                        <circle
                            cx="132"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                        />
                        <circle
                            cx="132"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 132 31.0001)"
                        />
                        <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                        />
                        <circle
                            cx="1.66667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3336)"
                        />
                        <circle
                            cx="31"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                        />
                        <circle
                            cx="31"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 31 16.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3336)"
                        />
                        <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3336)"
                        />
                        <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                        />
                        <circle
                            cx="88.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3336)"
                        />
                        <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                        />
                        <circle
                            cx="117.667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3336)"
                        />
                        <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                        />
                        <circle
                            cx="74.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3336)"
                        />
                        <circle
                            cx="103"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                        />
                        <circle
                            cx="103"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 103 16.3336)"
                        />
                        <circle
                            cx="132"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                        />
                        <circle
                            cx="132"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 132 16.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                        />
                        <circle
                            cx="16.3333"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                        />
                        <circle
                            cx="31"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 31 45.3336)"
                        />
                        <circle
                            cx="31"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                        />
                        <circle
                            cx="45.6667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                        />
                        <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                        />
                        <circle
                            cx="60.3333"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66707)"
                        />
                        <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66707)"
                        />
                        <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66707)"
                        />
                        <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66707)"
                        />
                        <circle
                            cx="103"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                        />
                        <circle
                            cx="103"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 103 1.66707)"
                        />
                        <circle
                            cx="132"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                        />
                        <circle
                            cx="132"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 132 1.66707)"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
