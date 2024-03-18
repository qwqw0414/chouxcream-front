import React from "react"
import { NavLink } from "react-router-dom"

// 탭바 컴포넌트 Props
interface TabBarProps {
    items?: Array<{ name: string, link: string }>
}

export const TabBar: React.FC<TabBarProps> = ({ items }) => {
    return (
        items &&
        <div className="h-[38px] text-[16px] text-gray-800 flex items-end gap-7">
            {items.map((item, index) => (
                <NavLink key={index} to={item.link} end className={({ isActive }) => {
                    return !!isActive ? "border-b-[2px] border-black font-bold pb-1" : "pb-1";
                }}>
                    {item.name}
                </NavLink>
            ))}
        </div>
    )
}