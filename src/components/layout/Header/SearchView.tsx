import { KreamInput } from "@/components/common/KreamInput";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, Dialog, DialogBody, DialogHeader, IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import moment from 'moment';

interface SearchViewProps {
    open: boolean;
    handleOpen: () => void;
}

export const SearchView: React.FC<SearchViewProps> = ({ open, handleOpen }) => {

    const [query, setQuery] = React.useState<string>("");
    const [searchHistory, setSearchHistory] = React.useState<string[]>([
        "스노우파크",
        "스노우 파크",
        "슈프림",
        "아미",
        "반스"
    ]);

    const [searchRecommend, setSearchRecommend] = React.useState<string[]>([
        "카리나 가디건",
        "나이키 P-6000",
        "마땡킴 점퍼",
        "디지털 데님",
        "스투시 후드집업",
        "아크테릭스 티셔츠"
    ]);
    const [searchPopular, setSearchPopular] = React.useState<string[]>([
        "모남희",
        "져지",
        "아디다스 져지",
        "호카",
        "나이키 바람막이",
        "반팔",
        "미스치프",
        "아미",
        "나이키 스투시",
        "574",
        "클락스",
        "990",
        "크록스",
        "스투시 후드",
        "스캇",
        "발렌시아가",
        "반스",
        "나이키 에어포스",
        "키링",
        "롱샴"
    ]);


    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log(query);
        } else if (e.key === "Escape") {
            setQuery("");
            e.preventDefault();
        }
    }

    return (
        <Dialog
            open={open}
            size={"xxl"}
            handler={handleOpen}
            className="overflow-y-scroll "
        >
            <DialogHeader className="p-0 pt-2 justify-end">
                {/* 검색창 닫기 버튼 */}
                <IconButton variant="text" onClick={handleOpen}>
                    <FontAwesomeIcon icon={faX} size="xl" className="text-gray-500" />
                </IconButton>
            </DialogHeader>

            {/* 컨텐츠 */}
            <DialogBody className="p-0 container flex flex-col max-w-[770px] text-black">
                {/* 검색바 @TODO */}
                <KreamInput
                    className="text-[24px]"
                    value={query}
                    onKeyDown={handleSearch}
                    onChange={(e) => { setQuery(e.target.value) }}
                />


                {/* Search Dashboard */}
                <div className="flex flex-col gap-10 mt-5">
                    {/* 최근 검색어 */}
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1 items-end">
                            <Typography className="text-[16px] font-bold">최근 검색어</Typography>
                            <Typography className="text-sm underline text-gray-700 cursor-pointer">지우기</Typography>
                        </div>
                        <div className="flex gap-2">
                            {
                                searchHistory.map((item, idx) => {
                                    return (
                                        <Chip
                                            key={idx}
                                            variant="outlined"
                                            value={item}
                                            onClose={() => { console.log("close") }}
                                            className="text-gray-600 border-gray-300 rounded-full cursor-pointer" />
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* 추천 검색어 */}
                    <div className="flex flex-col gap-3">
                        <Typography className="text-[16px] font-bold">추천 검색어</Typography>
                        <div className="flex gap-2">
                            {
                                searchRecommend.map((item, idx) => {
                                    return (
                                        <Chip
                                            key={idx}
                                            variant="filled"
                                            value={item}
                                            className="text-gray-600 bg-gray-100 rounded-full cursor-pointer" />
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* 인기 검색어 */}
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-end">
                            <Typography className="text-[16px] font-bold">인기 검색어</Typography>
                            <Typography className="text-[12px] ">{moment().format('MM.DD HH:00 기준')}</Typography>
                        </div>
                        <div className="grid grid-rows-10 grid-flow-col gap-4">
                            {
                                searchPopular.map((item, idx) => {
                                    return (
                                        <div key={idx} className="flex gap-2 cursor-pointer">
                                            <Typography className="font-semibold text-sm">{idx + 1}</Typography>
                                            <Typography className="text-sm">{item}</Typography>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* 인기 콜라보 */}
                    <div className="flex flex-col">
                        <Typography className="text-[16px] font-bold">인기 콜라보</Typography>
                    </div>
                </div>
            </DialogBody>
        </Dialog>
    )
};