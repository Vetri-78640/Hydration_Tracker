import React from "react";
import {
    FiDollarSign,
    FiHome,
    FiLink,
    FiPaperclip,
    FiUsers,
} from "react-icons/fi";

const RouteSelect = () => (
    <div className="space-y-1">
        <Route Icon={FiHome} selected title="Dashboard" />
        <Route Icon={FiUsers} selected={false} title="Track" />
        <Route Icon={FiPaperclip} selected={false} title="Progress" />
        <Route Icon={FiLink} selected={false} title="Facts" />
    </div>
);

const Route = ({ selected, Icon, title }) => (
    <button
        className={`flex items-center justify-start gap-2 w-full rounded-xl px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
            selected
                ? "bg-blue-200 text-black shadow"
                : "hover:bg-blue-200/50 bg-transparent text-white/75 shadow-none"
        }`}
    >
        <Icon className={selected ? "text-blue-600" : ""} />
        <span>{title}</span>
    </button>
);

export default RouteSelect;