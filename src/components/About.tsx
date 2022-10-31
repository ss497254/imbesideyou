import React from "react";
import Tilt from "react-parallax-tilt";

export default function About() {
    return (
        <section className="relative" id="About">
            <h2 className="h2 text-3xl text-center font-semibold mt-20 mb-12">
                Visualize and deeply understand each person with AI
            </h2>
            <img
                src="/aboutMain.webp"
                className="max-w-[500px] mx-auto mb-20 "
            />
            <h2 className="h2 text-2xl md:text-4xl text-center font-semibold py-8">
                Our Clients
            </h2>
            <div className="Marquee mb-20">
                <div className="Marquee-content flex justify-center gap-12">
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education1.webp" className="h-20" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/others2.webp" className="h-12" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education3.webp" className="h-10" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/others4.webp" className="h-12" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/others1.webp" className="h-8" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education2.webp" className="h-12" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education3.webp" className="h-10" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education4.webp" className="h-20" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education1.webp" className="h-20" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/others3.webp" className="h-14" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education3.webp" className="h-10" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education4.webp" className="h-20" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/others5.webp" className="h-20" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education2.webp" className="h-12" />
                    </div>
                    <div className="Marquee-tag flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <img src="/education4.webp" className="h-20" />
                    </div>
                </div>
            </div>
            <h2 className="h2 text-3xl text-center font-semibold mb-20">
                Values for our partners and users
            </h2>
            <div className="flex w-full gap-20 justify-center">
                <div className="max-w-[500px] h-60">
                    <h2 className="text-xl text-blue-500 font-semibold mb-3">
                        Online Education
                    </h2>
                    <p>
                        We use AI to discover the characteristics of students,
                        who have significantly improved their grades in the past
                        ,and those, who have cancelled, in order to improve
                        students' grades and decrease the cancellation rate.
                    </p>
                    <span className="rounded-md text-xs text-white px-2 py-1 bg-emerald-400 my-2 mx-1 inline-block">
                        Higher order rate
                    </span>
                    <span className="rounded-md text-xs text-white px-2 py-1 bg-emerald-400 my-2 mx-1 inline-block">
                        Lower cancellation rate
                    </span>
                </div>
                <Tilt
                    scale={1.05}
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    tiltReverse
                >
                    <img
                        className="h-60 hover:cursor-pointer"
                        src="/online_education.jpeg"
                    />
                </Tilt>
            </div>
            <div className="flex w-full gap-20 mt-16 justify-center">
                <div className="max-w-[500px] h-60">
                    <h2 className="text-xl text-blue-500 font-semibold mb-3">
                        Online Sales
                    </h2>
                    <p>
                        AI discover common trends in orders and lost orders from
                        pat business meeting videos, and improves sales
                        efficiency by sharfing the results of daily business
                        meeting analysis with supervisors and subordinates.
                    </p>
                    <span className="rounded-md text-xs text-white px-2 py-1 bg-emerald-400 my-2 mx-1 inline-block">
                        Higher order rate
                    </span>
                    <span className="rounded-md text-xs text-white px-2 py-1 bg-emerald-400 my-2 mx-1 inline-block">
                        Lower training cost
                    </span>
                    <span className="rounded-md text-xs text-white px-2 py-1 bg-emerald-400 my-2 mx-1 inline-block">
                        Lower reporting load
                    </span>
                </div>
                <Tilt
                    scale={1.05}
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    tiltReverse
                >
                    <img
                        className="h-60 hover:cursor-pointer"
                        src="/online_sales.jpeg"
                    />
                </Tilt>
            </div>
            <div className="flex w-full gap-20 justify-center mt-16">
                <div className="max-w-[500px] h-60">
                    <h2 className="text-xl text-blue-500 font-semibold mb-3">
                        Human resources
                    </h2>
                    <p>
                        By analyzing and sharing recruitment interviews and
                        1-on-1s, it reduces black boxes and genus problems in an
                        organization and supports the creation of a sensible
                        organizational culture.
                    </p>
                    <span className="rounded-md text-xs text-white px-2 py-1 bg-emerald-400 my-2 mx-1 inline-block">
                        Improved quality of communication
                    </span>
                    <span className="rounded-md text-xs text-white px-2 py-1 bg-emerald-400 my-2 mx-1 inline-block">
                        Lower reporting load
                    </span>
                </div>
                <Tilt
                    scale={1.05}
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    tiltReverse
                >
                    <img className="h-60 hover:cursor-pointer" src="/hr.jpeg" />
                </Tilt>
            </div>
            <div className="flex w-full gap-20 mt-16 mb-28 justify-center">
                <div className="max-w-[500px] h-60">
                    <h2 className="text-xl text-blue-500 font-semibold mb-3">
                        Mental Health
                    </h2>
                    <p>
                        By capturing daily changes in facial expression, tone of
                        voice, etc., it understands the mental state of the
                        subject and sends appropriate encouragement and alerts
                        to third parties.
                    </p>
                    <span className="rounded-md text-xs text-white px-2 py-1 bg-emerald-400 my-2 mx-1 inline-block">
                        Promotion of wellbeing
                    </span>
                    <span className="rounded-md text-xs text-white px-2 py-1 bg-emerald-400 my-2 mx-1 inline-block">
                        Lower response costs by prevention
                    </span>
                </div>
                <Tilt
                    scale={1.05}
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    tiltReverse
                >
                    <img
                        className="h-60 hover:cursor-pointer"
                        src="/mental_health.jpeg"
                    />
                </Tilt>
            </div>
        </section>
    );
}
