import Link from "next/link";
import React from "react";

export default function HeroBackground({ className }: any) {
    return (
        <div
            className={`relative z-10 overflow-hidden bg-emerald-400 py-8 ${className}`}
        >
            <div className="flex flex-col items-center">
                <img src="/logo.png" className="h-16" />
                <div className="pt-8 flex gap-4">
                    <Link href="/" as="/">
                        <div className="bg-white rounded-md text-center w-44 px-3 py-1 w">
                            Home
                        </div>
                    </Link>
                    <Link href="/news" as="news">
                        <div className="bg-white rounded-md text-center w-44 px-3 py-1 w">
                            News
                        </div>
                    </Link>
                    <Link href="/users-voice" as="users-voice">
                        <div className="bg-white rounded-md text-center w-44 px-3 py-1 w">
                            User's voice
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="bg-white rounded-md text-center w-44 px-3 py-1 w">
                            More
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <span className="absolute top-0 left-0 z-[-1]">
                    <svg
                        width="495"
                        height="470"
                        viewBox="0 0 495 470"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="55"
                            cy="442"
                            r="138"
                            stroke="white"
                            strokeOpacity="0.2"
                            strokeWidth="50"
                        />
                        <circle
                            cx="446"
                            r="39"
                            stroke="white"
                            strokeOpacity="0.2"
                            strokeWidth="20"
                        />
                        <path
                            d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                            stroke="white"
                            strokeOpacity="0.2"
                            strokeWidth="12"
                        />
                    </svg>
                </span>
                <span className="absolute top-0 right-0 z-[-1]">
                    <svg
                        width="493"
                        height="470"
                        viewBox="0 0 493 470"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="462"
                            cy="5"
                            r="138"
                            stroke="white"
                            strokeOpacity="0.2"
                            strokeWidth="50"
                        />
                        <circle
                            cx="49"
                            cy="470"
                            r="39"
                            stroke="white"
                            strokeOpacity="0.2"
                            strokeWidth="20"
                        />
                        <path
                            d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                            stroke="white"
                            strokeOpacity="0.2"
                            strokeWidth="13"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
}
