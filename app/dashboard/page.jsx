"use client";
import Masonry from "react-masonry-css";
import Card1 from "@/components/Dashboard/Cards/Card1";
import Card2 from "@/components/Dashboard/Cards/Card2";
import Card3 from "@/components/Dashboard/Cards/Card3";
import Card4 from "@/components/Dashboard/Cards/Card4";
import Card5 from "@/components/Dashboard/Cards/Card5";

const cardClasses = "w-full border border-blue-300/50 bg-blue-300/25 rounded-xl flex flex-col items-center p-4 self-start";

export default function DashboardHome() {
    const breakpoints = {
        default: 3,
        1024: 3,
        768: 2,
        640: 1  // Use a more realistic small screen breakpoint
    };

    return (
        <Masonry
            breakpointCols={breakpoints}
            className="flex gap-3"
            columnClassName="masonry-column"
        >
            <Card2 className={cardClasses} />
            <Card1 className={cardClasses} />
            <Card3 className={cardClasses} />
            <Card4 className={cardClasses} />
            <Card5 className={cardClasses} />
        </Masonry>
    );
}