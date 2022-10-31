import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <div id="loader-wrapper">
                    <div id="loader" />
                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
