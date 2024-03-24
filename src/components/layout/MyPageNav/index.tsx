import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

interface MyPageNav {
  children: React.ReactNode;
}

const MyPageNav: React.FC<MyPageNav> = ({ children }) => {
  return (
    <div className="flex max-w-[1280px] mt-[40px] mx-auto pb-[160px] px-[40px]">
      <div className="mr-[20px] w-[180px]">
        <Link to="/my">
          <h2 className="text-[24px] font-bold pb-[30px]">마이 페이지</h2>
        </Link>
        <nav className="block">

          {/* 쇼핑 정보 */}
          <div className="flex flex-col gap-2">
            <Typography className="text-[18px] font-bold leading-5 mb-1 align-top">쇼핑 정보</Typography>
            <NavLink
              to="/my/buying"
              end
              className={({ isActive }) => { return isActive ? "text-black font-bold" : "text-[#909090] text-[15px] cursor-pointer"; }}>
              구매 내역
            </NavLink>
            <NavLink
              to="/my/selling"
              end
              className={({ isActive }) => { return isActive ? "text-black font-bold" : "text-[#909090] text-[15px] cursor-pointer"; }}>
              판매 내역
            </NavLink>
            <NavLink
              to="/saved/tab/saved-product"
              end
              className={({ isActive }) => { return isActive ? "text-black font-bold" : "text-[#909090] text-[15px] cursor-pointer"; }}>
              관심
            </NavLink>
          </div>

          {/* 내 정보 */}
          <div className="mt-10 flex flex-col gap-2">
            <Typography className="text-[18px] font-bold leading-5 mb-1 align-top">
              내 정보
            </Typography>
            <NavLink
              to="/my/profile"
              end
              className={({ isActive }) => { return isActive ? "text-black font-bold" : "text-[#909090] text-[15px] cursor-pointer"; }}>
              로그인 정보
            </NavLink>

            <NavLink
              to="/my/profile-edit"
              end
              className={({ isActive }) => { return isActive ? "text-black font-bold" : "text-[#909090] text-[15px] cursor-pointer"; }}>
              프로필 관리
            </NavLink>
            <NavLink
              to="/my/address"
              end
              className={({ isActive }) => { return isActive ? "text-black font-bold" : "text-[#909090] text-[15px] cursor-pointer"; }}>
              주소록
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MyPageNav;
