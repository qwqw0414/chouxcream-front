import { useForm } from "react-hook-form";

interface FormInputProps {
  label: string; // 라벨
  type: string; // input 타입
  placeholder: string; 
  register: ReturnType<typeof useForm>["register"];
  pattern: RegExp; // 유효성 검사 정규식
  patternMessage: string; // 유효성 검사 에러 메시지
  errors?: string; // 에러 메시지
  name: string; // input name 
}

const FindFormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  register,
  pattern,
  patternMessage,
  errors,
  name
}) => {
  return (
    <div className="pt-[10px] pb-[14px]">
      <label className={`text-[13px] tracking-tight font-bold leading-[18px] ${!!errors ? 'text-red-500' : 'text-black'}`}>{label}</label>
      <input
        type={type}
        className={`border-b-[1px] border-solid border-[#ebebeb] w-full h-[39px] text-[15px] tracking-tight leading-[22px] py-2 focus:outline-none ${!!errors ? "focus:border-b-1" : "focus:border-b-2"} ${!!errors ? "focus:border-red-500" : "focus:border-black"} input-no-spinners`}
        placeholder={placeholder}
        {...register(name, {
          required: true,
          pattern: {
            value: pattern, // 휴대폰 번호 유효성 검사
            message: patternMessage
          }
        })}
      />
      {!!errors && <p className="text-red-500 text-[11px]">{errors}</p>}
    </div>
    
  )
}

export default FindFormInput;