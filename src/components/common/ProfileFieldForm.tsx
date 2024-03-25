import React from "react";
import AuthFormInput from "./AuthFormInput";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

interface ProfileFieldFormProps {
  label: string; // 라벨
  type: string; // input 타입
  register: ReturnType<typeof useForm>["register"];
  pattern: RegExp; // 유효성 검사 정규식
  patternMessage: string; // 유효성 검사 에러 메시지
  errors?: string; // 에러 메시지
  name: string; // input name
  onCancel: () => void;
}


const ProfileFieldForm: React.FC<ProfileFieldFormProps> = ({
  label,
  type,
  register,
  pattern,
  patternMessage,
  errors,
  name,
  onCancel,
}) => {
 
  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      {/* 이메일 주소 인풋 */}
      <AuthFormInput
        label={label}
        type={type}
        placeholder=""
        register={register}
        pattern={pattern}
        patternMessage={patternMessage}
        errors={errors}
        name={name}
      />
      {/* </form> */}
      <div className="pt-[28px] text-center">
        <Button
          onClick={onCancel}
          ripple={false}
          className="px-[38px] border-[1px] border-[#D3D3D3] text-[#4E4E4E] bg-white shadow-none hover:shadow-none active:bg-[#F4F4F4]"
        >
          취소
        </Button>
        <Button ripple={false} className="ml-[8px] px-[38px] hover:shadow-none">
          저장
        </Button>
      </div>
    </>
  );
};

export default ProfileFieldForm;
