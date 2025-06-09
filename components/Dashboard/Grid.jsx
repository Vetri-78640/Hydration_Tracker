import React from 'react'
import StatCards from "@/components/Dashboard/StatCards";

const Grid = () => {
    return (
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 px-4">
            <StatCards />
        </div>
    )
}
export default Grid
