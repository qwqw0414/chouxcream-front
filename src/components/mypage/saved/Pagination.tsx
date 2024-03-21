import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PaginationProps {
  totalItems: number;
  itemCountPerPage: number;
  pageCount: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemCountPerPage,
  pageCount,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    if (currentPage === start + pageCount) {
      setStart((prev) => prev + pageCount);
    } else if (currentPage < start) {
      setStart((prev) => prev - pageCount);
    } else if (currentPage === totalPages) {
      const newStart = (Math.ceil(totalPages / pageCount) - 1) * pageCount + 1;
      setStart(newStart);
    }
  }, [currentPage, pageCount, totalPages, start]);

  return (
    <div className="flex justify-center h-[78px] py-7">
      <ul className="flex items-center gap-5 font-bold text-base">
        <li className={`${noPrev && "hidden"}`}>
          <Link to="?page=1">
            <img src="/img/leftend_icon.svg" alt="" className="w-3 h-3" />
          </Link>
        </li>
        <li className={`${noPrev && "hidden"}`}>
          <Link to={`?page=${start - 1}`}>
            <img src="/img/leftmove_icon.svg" alt="" className="w-3 h-3" />
          </Link>
        </li>
        {[...Array(pageCount)].map(
          (a, i) =>
            start + i <= totalPages && (
              <li
                key={i}
                className={`${currentPage !== start + i && "opacity-20"}`}
              >
                <Link to={`?page=${start + i}`}>{start + i}</Link>
              </li>
            )
        )}
        <li className={`${noNext && "hidden"}`}>
          <Link to={`?page=${start + pageCount}`}>
            <img src="/img/rightmove_icon.svg" alt="" className="w-3 h-3" />
          </Link>
        </li>
        <li className={`${noNext && "hidden"}`}>
          <Link to={`?page=${totalPages}`}>
            <img src="/img/rightend_icon.svg" alt="" className="w-3 h-3" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
