import { Product } from "@/pages/mypage/shopping/saved/savedProduct/SavedProductPage";
import React from "react";
import { Link } from "react-router-dom";

const SavedProductInfo: React.FC<{ item: Product }> = ({ item }) => {
  const handleDeleteProduct = () => {
    console.log("상품삭제");
  };
  const handlePurchaseClick = () => {
    console.log("상품구매");
  };
  return (
    <li>
      <div className="h-[121px] py-5 border-b border-[#ebebeb]">
        <div className="flex justify-between">
          <Link to="" className="flex cursor-pointer grow">
            <div className="w-20 h-20 rounded-md">
              <img
                className="w-20 h-20 object-cover rounded-md"
                src={item.product_image}
                alt="상품 이미지"
              />
            </div>
            <div className="ml-[13px] flex flex-col justify-between text-[13px] grow">
              <div>
                <h3 className="font-bold">{item.product_brand}</h3>
                <p>{item.product_name}</p>
              </div>
              <span className="font-bold">{item.product_size}</span>
            </div>
          </Link>
          <div className="flex flex-col">
            <button
              onClick={handlePurchaseClick}
              className="flex items-center min-w-[164px] h-[60px] bg-[#EF6253] text-white rounded-[10px] relative before:absolute before:bg-[#222222] before:opacity-10 before:w-px before:h-[60px] before:left-[55px]"
            >
              <strong className="text-lg w-[55px]">구매</strong>
              <div className="ml-[10px] flex flex-col leading-[15px]">
                <span className="font-bold">
                  <span className="text-[15px]">
                    {item.product_price.toLocaleString()}
                  </span>
                  <span className="text-sm">원</span>
                </span>
                <span className="text-[11px] flex-start flex">즉시 구매가</span>
              </div>
            </button>
            <div className="flex justify-end text-xs text-[#222222] mt-[6px] opacity-80">
              <p
                onClick={handleDeleteProduct}
                className="underline cursor-pointer"
              >
                삭제
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SavedProductInfo;
