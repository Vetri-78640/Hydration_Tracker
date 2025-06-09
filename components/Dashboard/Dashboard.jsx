import React from 'react'
import {TopBar} from "@/components/Dashboard/TopBar";
import Grid from "@/components/Dashboard/Grid";

const Dashboard = () => {
    return (
        <div className="bg-blue-950 rounded-lg shadow h-[200vh]">
            <TopBar />
            <Grid />
        </div>
    )
}
export default Dashboard
