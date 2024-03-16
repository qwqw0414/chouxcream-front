import { Button, Typography } from "@material-tailwind/react";

const Footer: React.FC = () => {
    return (
        <footer className="2xl:container mt-10 p-10 border-t border-t-gray-300">
            <div className="flex flex-col">

                <div className="flex border-b border-b-gray-300 pb-[56px]">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <div className="flex">
                            {/* 이용안내 */}
                            <div className="flex flex-col gap-2 w-[160px]">
                                <Typography variant="h6">이용안내</Typography>
                                <Typography className="text-gray-600 text-[14px] font-extralight cursor-pointer">검수기준</Typography>
                                <Typography className="text-gray-600 text-[14px] font-extralight cursor-pointer">이용정책</Typography>
                                <Typography className="text-gray-600 text-[14px] font-extralight cursor-pointer">패널티 정책</Typography>
                                <Typography className="text-gray-600 text-[14px] font-extralight cursor-pointer">커뮤니티 가이드라인</Typography>
                            </div>
                            {/* 고객지원 */}
                            <div className="flex flex-col gap-2 ml-[80px]">
                                <Typography className="text-[16px] font-bold">고객지원</Typography>
                                <Typography className="text-gray-600 text-[14px] font-extralight cursor-pointer">공지사항</Typography>
                                <Typography className="text-gray-600 text-[14px] font-extralight cursor-pointer">서비스 소개</Typography>
                                <Typography className="text-gray-600 text-[14px] font-extralight cursor-pointer">스토어 안내</Typography>
                                <Typography className="text-gray-600 text-[14px] font-extralight cursor-pointer">판매자 방문접수</Typography>
                            </div>
                        </div>

                        {/* 고객센터 안내 */}
                        <div className="flex flex-col gap-2">
                            <Typography className="text-[16px] font-bold">고객센터 1234-1234</Typography>
                            <Typography className="text-gray-500 text-[13px] cursor-pointer">
                                운영시간 평일 10:00 - 18:00 (토∙일, 공휴일 휴무) <br />
                                점심시간 평일 13:00 - 14:00
                            </Typography>
                            <Typography className="text-gray-700 text-[13px] cursor-pointer">1:1 문의하기는 앱에서만 가능합니다.</Typography>
                            <Button className="w-[100px] text-[12px] px-0 py-2 rounded-none">자주 묻는 질문</Button>
                        </div>
                    </div>

                </div>

                <div className="mt-[30px] flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <Typography className="text-[14px] cursor-pointer">회사소개</Typography>
                            <Typography className="text-[14px] cursor-pointer">인재채용</Typography>
                            <Typography className="text-[14px] cursor-pointer">제휴제안</Typography>
                            <Typography className="text-[14px] cursor-pointer">이용약관</Typography>
                            <Typography className="text-[14px] cursor-pointer font-bold">개인정보처리방침</Typography>
                        </div>
                        <div>
                            @TODO 아이콘 추가 필요
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;