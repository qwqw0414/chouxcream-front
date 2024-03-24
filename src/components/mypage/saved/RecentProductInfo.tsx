import React, { useState } from "react";
import ProductRecentDialog from "./ProductRecentDialog";

interface RecentProductInfoProps {
  product_brand: string;
  product_en_name: string;
  product_ko_name: string;
  product_fast: boolean;
  product_image: string;
  product_price: number;
  product_like: boolean;
  product_likequantity: number;
  product_sold: number;
  product_size: string[];
}

const RecentProductInfo: React.FC<{ item: RecentProductInfoProps }> = ({
  item,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full max-h-[238px] rounded-lg relative">
        <img
          className="w-full max-h-[238px] object-cover rounded-lg"
          src={item.product_image}
          alt=""
        />
        <span className="text-xs absolute top-2.5 right-2.5">
          거래 {item.product_sold}
        </span>
      </div>
      <div className="pt-2 pl-1 ">
        <p className="text-[13px] font-bold mb-0.5">{item.product_brand}</p>
        <div>
          <p className="text-[13px]">{item.product_en_name}</p>
          <p className="text-[11px] opacity-50 mt-0.5">
            {item.product_ko_name}
          </p>
        </div>
        {item.product_fast && (
          <div className="mt-1.5">
            <div className="inline-flex bg-[#F2F9F6] items-center p-1">
              <img
                src="/img/fast_icon.svg"
                alt=""
                className="w-3 h-3 mr-[1.5px]"
              />
              <span className="text-[#31B46E] text-[10px]">빠른배송</span>
            </div>
          </div>
        )}
      </div>
      <div className="px-1 mt-3">
        <p className="text-sm font-bold">
          {item.product_price.toLocaleString()}원
        </p>
        <p className="text-[11px] opacity-50">즉시 구매가</p>
      </div>
      <div className="pt-3 px-1">
        <div className="flex">
          <img
            src={`${
              item.product_like
                ? "/img/likeicon_on.svg"
                : "/img/likeicon_off.svg"
            }`}
            alt="관심상태"
            className="w-[14px] h-[16px] cursor-pointer"
            onClick={handleOpen}
          />
          <span className="ml-1 text-xs opacity-50">
            {item.product_likequantity}
          </span>
        </div>
      </div>
      <ProductRecentDialog
        open={open}
        handleOpen={handleOpen}
        product_size={item.product_size}
      />
    </div>
  );
};

export default RecentProductInfo;
