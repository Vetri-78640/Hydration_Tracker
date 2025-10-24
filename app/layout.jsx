import "./globals.css";
import { UserProvider } from "@/app/context/UserContext";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: "Hydraze",
    description: "Hydraze is a minimalist open-source web app that helps you monitor your daily water intake, with weather-based suggestions and hydration facts to keep you healthy and motivated.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="antialiased overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <ThemeProvider>
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
        </ThemeProvider>
        </body>
        </html>
    );
}
