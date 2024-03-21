import { Button } from "@material-tailwind/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface SavedWrapperProps {
  children: React.ReactNode;
}

const SavedWrapper: React.FC<SavedWrapperProps> = ({ children }) => {
  const location = useLocation();

  const isSavedPage = location.pathname === "/my/saved/tab/saved-product";
  const isRecentPage =
    location.pathname === "/my/saved/tab/recently-viewed-product";

  return (
    <div className="max-w-[1000px] flex flex-col m-auto">
      <div className="h-12 border-b-[3px] border-black pb-4">
        <div className="text-2xl font-bold">
          <h3>관심</h3>
        </div>
      </div>
      <div className="py-3 flex gap-1">
        <Link to="/my/saved/tab/saved-product">
          <Button
            className="rounded-full h-[34px] px-4 py-1 hover:shadow-none border-[#f0f0f0] text-sm"
            variant={isSavedPage ? "gradient" : "outlined"}
          >
            상품
          </Button>
        </Link>
        <Link to="/my/saved/tab/recently-viewed-product">
          <Button
            className="rounded-full h-[34px] px-4 py-1 hover:shadow-none border-[#f0f0f0] text-sm"
            variant={isRecentPage ? "gradient" : "outlined"}
          >
            최근 본 상품
          </Button>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default SavedWrapper;
