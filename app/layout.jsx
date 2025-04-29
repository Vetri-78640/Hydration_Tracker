import "./globals.css";
export const metadata = {
    title: "Hydration Tracker",
    description: "Track your daily water intake",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="antialiased bg-[#050521] text-white overflow-x-hidden">
        {children}
        </body>
        </html>
    );
}