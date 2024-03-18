import { Button } from "@material-tailwind/react";

interface FindWrapperProps {
  title: string; // 페이지 타이틀
  notice: string; // 페이지 설명
  children: React.ReactNode;
  isFormValid: boolean; // 폼 데이터 유효성
  buttonType: string; // 버튼 타입
}

const FindWrapper: React.FC<FindWrapperProps> = ({
  title,
  notice,
  children,
  isFormValid, 
  buttonType
}) => {
  return (
    <div className="mt-[90px] mx-auto pt-[60px] pb-[160px] w-[400px]">
      <div className="flex flex-col">
        {/* 타이틀 */}
        <div className="border-b-2 border-black text-[32px] font-bold tracking-tighter pb-[41px] text-center">
          {title}
        </div>
        {/* 설명 */}
        <div className="pt-[40px] pb-[30px]">
          <p className="whitespace-pre-line text-[14px] tracking-tighter">
            {notice}
          </p>
        </div>
        {/* 폼 인풋 데이터 */}
        {children}
        {/* 버튼 */}
        <div className="pt-[44px]">
          <Button
            type="submit"
            disabled={!isFormValid}
            className={`w-full rounded-xl h-[52px] ${
              !!isFormValid ? "bg-[#222]" : "bg-[#ebebeb]"
            } font-bold text-[16px] cursor-default`}
          > 
            {buttonType}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindWrapper;
