import React from "react";
import { SpeakerDetail } from "./SpeakerDetail";

export default function Team() {
    const members = [
        {
            img: "/shozo_kamiya.webp",
            title: "Shozo Kamiya",
            desc: [
                "• Kobe University Bachelor of Economics",
                "• Planned, launched SaaS businesses at NTTData",
                "• Engaged in M&A and alliances at NTT Docomo, led investments for startups",
                '• As a Nei-Kid Founder, selected by the Ministry of Economy, Trade and Industry for "Startup" 2017SV, winner of the 2018 Excellence Award',
            ],
        },
        {
            img: "/kotaro_ando.webp",
            title: "Kotaro Ando",
            desc: [
                "• Kyushu University Faculty of Science, Graduate school of science",
                "• Engaged in the development of services using video and AI, mainly in the media industry at NTTData",
                "• Development of hybrid AI and multimodal AI that combines various types of AI and optimal results. System architect with a deep knowledge of the SaaS business.",
            ],
        },
        {
            img: "/yasuhiro_nose.webp",
            title: "Yasuhiro Nose",
            desc: [
                "• Osaka University Graduate School of Information Science and Technology",
                "• Built the AI business for all three Japanese mobile carriers and was responsible for projects such as image and voice recognition in robots",
                "• Senior Architect at NTTDATA.",
                "• A full-stack engineer with the ability to perform a wide range of tasks from front-end to back-end.",
            ],
        },
        {
            img: "/minoru_nakahata.webp",
            title: "Minoru Nakahata",
            desc: [
                "• Graduated from Yokohama City Graduate School (Master of Science)",
                "• In 2011, passed patent attorney bar examination, and engaged in both foreign and domestic cases at a patent office. Joined Colopl (a mobile game) in 2013.",
                "• Structured in-house invention and creation to dramatically increase the number of patent applications",
            ],
        },
    ];
    return (
        <section
            id="Teams"
            className="pt-20 pb-10 lg:pt-[120px] max-w-6xl mx-auto px-8 lg:pb-20"
        >
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[100px] max-w-2xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                            Meet Our Team
                        </h2>
                        {/* <p className="text-md px-6 leading-relaxed text-body-color sm:leading-relaxed">
                            There are many variations of passages of Lorem Ipsum
                            available but the majority have suffered alteration
                            in some form.
                        </p> */}
                    </div>
                </div>
            </div>
            <div className="flex justify-between flex-wrap w-full gap-4">
                {members.map((member, i) => (
                    <SpeakerDetail key={i} {...member} />
                ))}
            </div>
        </section>
    );
}
