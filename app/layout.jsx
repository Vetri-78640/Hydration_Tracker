import "./globals.css";
import { UserProvider } from "@/app/context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: "Hydration Tracker",
    description: "Track your daily water intake",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="antialiased bg-[#050521] text-white overflow-x-hidden">
        <UserProvider>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </UserProvider>
        </body>
        </html>
    );
}
