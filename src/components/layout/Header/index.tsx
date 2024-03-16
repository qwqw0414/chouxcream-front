import { useAppSelector } from "@/store";
import { Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { TabBar } from "./TabBar";
import tabItems from '@/configs/tab-items-config.json';

// 탭 타입
export type TabType = keyof typeof tabItems;

// 헤더 컴포넌트 Props
interface HeaderProps {
    title?: string | undefined // 페이지 타이틀
    tabType?: TabType // 탭 타입
}

const Header: React.FC<HeaderProps> = ({ title, tabType }) => {
    // 로그인 여부
    const isLogged: boolean = useAppSelector(state => state.authReducer.isLogged);

    return (
        // 고정 헤더
        <header >
            <div className="fixed bg-white w-full border-b border-b-gray-300">
                <div className="flex flex-col px-10 2xl:container">
                    {/* 상단 바로가기 : 고객센터, 마이페이지, 관심, 알림, 로그인 */}
                    <div className="hidden md:flex gap-6 justify-end text-xs text-gray-700 mt-2">

                        <Link to="/notice">고객센터</Link>
                        <Link to="/my">마이페이지</Link>
                        <Link to="/saved/tab/saved-product">관심</Link>

                        {/* @TODO 알림 사이드 창 */}
                        <div className="cursor-pointer">알림</div>

                        {!!isLogged ?
                            <Link to="/logout">로그아웃</Link>
                            :
                            <Link to="/login">로그인</Link>}
                    </div>

                    <div className="md:py-3 py-1 flex justify-between">

                        {/* LOGO */}
                        <Link to="/">
                            <Typography className="font-black text-[28px] italic ">CHOUXKREAM</Typography>
                        </Link>

                        {/* 메인 네비 */}
                        <div className="hidden md:flex gap-10 items-center mr-2 text-lg text-gray-700">
                            <NavLink
                                to="/"
                                // className={({ isActive, isPending }) => {
                                className={({ isActive }) => { return isActive ? "text-black font-bold" : ""; }}>
                                HOME
                            </NavLink>
                            <NavLink
                                to="/test"
                                className={({ isActive }) => { return isActive ? "text-black font-bold" : ""; }}>
                                TEST
                            </NavLink>
                            <NavLink
                                to="/search"
                                className={({ isActive }) => { return isActive ? "text-black font-bold" : ""; }}>
                                SHOP
                            </NavLink>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer text-black" size="xl" />
                        </div>
                        <div className="md:hidden flex p-2">
                            <FontAwesomeIcon icon={faBell} className="cursor-pointer text-gray-600" size="xl" />
                        </div>
                    </div>

                    {/* title */}
                    {!!title &&
                        <div className="flex justify-center py-3">
                            <Typography className="text-3xl font-semibold">{title}</Typography>
                        </div>
                    }

                    {/* 탭 */}
                    {!!tabType && <TabBar items={tabItems[tabType]} />}
                </div>
            </div>
        </header>
    )
}

export default Header;