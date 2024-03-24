import ContentsWrapper from "@/components/layout/ContentsWrapper";
import RecentProductInfo from "@/components/mypage/saved/RecentProductInfo";
import SavedWrapper from "@/components/mypage/saved/SavedWrapper";
import React from "react";
import data from "@/configs/interest-item.json";

const RecentlyViewedPage: React.FC = () => {
  const product = data.data2;

  return (
    <ContentsWrapper>
      <SavedWrapper>
        <div>
          <div className="grid grid-cols-4 gap-y-11 gap-x-4">
            {product?.map((item, i) => (
              <RecentProductInfo key={i} item={item} />
            ))}
          </div>
        </div>
      </SavedWrapper>
    </ContentsWrapper>
  );
};

export default RecentlyViewedPage;
