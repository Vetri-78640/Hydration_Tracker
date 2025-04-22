import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "Hydration Tracker",
    description: "Track your daily water intake",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${poppins.variable} antialiased bg-[#040a25] text-white font-sans`}
        >
        {children}
        </body>
        </html>
    );
}