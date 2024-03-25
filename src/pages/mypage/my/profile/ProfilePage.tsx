import ProfileField from "@/components/common/ProfileField";
import ProfileFieldForm from "@/components/common/ProfileFieldForm";
import ContentsWrapper from "@/components/layout/ContentsWrapper";
import MyPageNav from "@/components/layout/MyPageNav";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export interface IFormInput {
  email?: string;
  password?: string;
}

const ProfilePage: React.FC = () => {
  const [emailbuttonState, setEmailButtonState] = useState("default");
  const [pwdbuttonState, setPwdButtonState] = useState("default");

  const handleButtonClick = (field: "email" | "password") => {
    const isEmailField = field === "email";

    if (isEmailField) {
      setEmailButtonState (current => current === "default" ? "edited" : "default");
    } else {
      setPwdButtonState (current => current === "default" ? "edited" : "default");
    }

    setTimeout(() => {
      setFocus(field);
    }, 0);
  }

  const { register, setFocus, formState: { errors } } = useForm<IFormInput>({
    mode: "onChange",
    defaultValues: {
      email: "jeonghwayun0119@naver.com",
    },
  });

  return (
    <ContentsWrapper>
      <MyPageNav title="로그인 정보" bordered={true}>
        <div className="max-w-[480px] pt-[38px]">
          <div className="text-[18px] font-bold mb-[25px]">내 계정</div>

          {emailbuttonState === "default" && (
            <ProfileField
              label="이메일 주소"
              value="j*********9@naver.com"
              onEdit={() => handleButtonClick("email")}
            />
          )}

          {emailbuttonState === "edited" && (
            <ProfileFieldForm
              label="이메일 주소"
              type="text"
              register={register}
              pattern={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
              patternMessage="이메일 주소를 정확히 입력해주세요."
              errors={errors.email?.message}
              name="email"
              onCancel={() => handleButtonClick("email")}
            />
          )}

          {pwdbuttonState === "default" && (
            <ProfileField
              label="비밀번호"
              value="●●●●●●●●●"
              onEdit={() => handleButtonClick("password")}
            />
          )}

          {pwdbuttonState === "edited" && (
            <ProfileFieldForm
              label="비밀번호"
              type="password"
              register={register}
              pattern={/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/}
              patternMessage="비밀번호를 정확히 입력해주세요."
              errors={errors.password?.message}
              name="password"
              onCancel={() => handleButtonClick("password")}
            />
          )}
        </div>

        <div className="p-0 mt-[55px] font-medium text-[13px] text-gray-500 underline cursor-pointer">
          회원 탈퇴
        </div>
      </MyPageNav>
    </ContentsWrapper>
  );
};

export default ProfilePage;
