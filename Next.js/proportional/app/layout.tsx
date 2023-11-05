import { StrictMode } from "react";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Proportional"
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <StrictMode>
            <html>
                <body>
                    { children }
                </body>
            </html>
        </StrictMode>
    );
}
