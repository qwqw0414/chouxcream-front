import ContentsWrapper from "@/components/layout/ContentsWrapper";
import SavedWrapper from "@/components/mypage/saved/SavedWrapper";
import React, { useEffect, useState } from "react";

import data from "@/configs/interest-item.json";
import SavedProductInfo from "@/components/mypage/saved/SavedProductInfo";
import { useSearchParams } from "react-router-dom";
import Pagination from "@/components/mypage/saved/Pagination";

export interface Product {
  product_brand: string;
  product_name: string;
  product_image: string;
  product_size: string;
  product_price: number;
}

const SavedProductPage: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState("관심 등록순");
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const page: number = parseInt(searchParams.get("page") || "1", 10);
  const itemCountPerPage = 10;

  useEffect(() => {
    const sortedData = sortDataBySortOrder(data.data);
    const startIndex = (page - 1) * 10;
    const selectedItems = sortedData.slice(startIndex, startIndex + 10);
    setProducts(selectedItems);
    setTotalItems(sortedData.length);
    window.scrollTo(0, 0);
  }, [sortOrder, page]);

  const sortDataBySortOrder = (data: Product[]): Product[] => {
    switch (sortOrder) {
      case "관심 등록순":
        // 추후 실데이터 나온후 날짜순 정렬예정
        return data;
      case "즉시 구매가순":
        return data.sort((a, b) => a.product_price - b.product_price);
      default:
        return data;
    }
  };

  return (
    <ContentsWrapper>
      <SavedWrapper>
        <div>
          <div className="h-11 pt-5 flex justify-between">
            <div className="text-[13px]">전체 {totalItems}</div>
            <div
              className="flex text-sm cursor-pointer relative"
              onClick={() => setIsMenuVisible(!isMenuVisible)}
            >
              <div>{sortOrder}</div>
              <img src="/img/updown_icon.svg" alt="" />
              {isMenuVisible && (
                <div className="absolute py-1 w-36 bg-white shadow-md top-7 rounded-xl right-0 z-10">
                  <ul>
                    <li
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex ${
                        sortOrder == "관심 등록순" && "font-bold"
                      }`}
                      onClick={() => setSortOrder("관심 등록순")}
                    >
                      <div>관심 등록순</div>
                      {sortOrder == "관심 등록순" && (
                        <img
                          src="/img/check_icon.svg"
                          alt=""
                          className="ml-4"
                        />
                      )}
                    </li>
                    <li
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex ${
                        sortOrder == "즉시 구매가순" && "font-bold"
                      }`}
                      onClick={() => setSortOrder("즉시 구매가순")}
                    >
                      <div>즉시 구매가순</div>
                      {sortOrder == "즉시 구매가순" && (
                        <img
                          src="/img/check_icon.svg"
                          alt=""
                          className="ml-4"
                        />
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <ul>
            {/* 관심 상품 목록 */}
            {products &&
              products.map((item, i) => (
                <SavedProductInfo item={item} key={i} />
              ))}
          </ul>
          {/* 페이지네이션 목록 */}
          <Pagination
            totalItems={totalItems}
            currentPage={page && page > 0 ? page : 1}
            pageCount={5}
            itemCountPerPage={itemCountPerPage}
          />
        </div>
      </SavedWrapper>
    </ContentsWrapper>
  );
};

export default SavedProductPage;
