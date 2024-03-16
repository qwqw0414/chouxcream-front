import { faFileInvoice, faHouseChimneyWindow, faShop } from "@fortawesome/free-solid-svg-icons"
import { faBookmark, faUser } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"


const menuItems = [
    { name: "HOME", link: "/", icon: faHouseChimneyWindow },
    { name: "TEST", link: "/test", icon: faFileInvoice },
    { name: "SHOP", link: "/search", icon: faShop },
    { name: "SAVED", link: "/saved/tab/saved-product", icon: faBookmark },
    { name: "MY", link: "/my", icon: faUser },
]

export const FootNav: React.FC = () => {
    return (
        <div className="h-[50px] md:hidden">
            <div className="border-t border-t-gray-300 flex fixed bottom-0 h-[50px] bg-white w-full justify-around items-center pt-2 ">
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.link} className="flex flex-col items-center">
                        <FontAwesomeIcon icon={item.icon} size="xl" />
                        <span className="text-[10px]">{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}