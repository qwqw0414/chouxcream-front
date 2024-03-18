import ContentsWrapper from "@/components/layout/ContentsWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthFormInput from "@/components/common/AuthFormInput";
import AuthWrapper from "@/components/layout/AuthWrapper";

export interface IFormInput {
  email?: string; 
  password?: string;
}

const JoinPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <ContentsWrapper>
      <AuthWrapper
        title="회원가입"
        isFormValid={isValid}
        buttonType="가입하기"
      >
        {/* 폼 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 이메일 주소 인풋 */}
          <AuthFormInput
            label="이메일 주소*"
            type="text"
            placeholder="예) kream@kream.co.kr"
            register={register}
            pattern={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
            patternMessage="이메일 주소를 정확히 입력해주세요."
            errors={errors.email?.message}
            name="email"
          />

          {/* 비밀번호 인풋 */}
          <AuthFormInput
            label="비밀번호*"
            type="password"
            placeholder="영문, 숫자, 특수문자 조합 8-16자"
            register={register}
            pattern={/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/}
            patternMessage="이메일 주소를 정확히 입력해주세요."
            errors={errors.password?.message}
            name="password"
          /> 
        </form>
      </AuthWrapper>
    </ContentsWrapper>
  );
};

export default JoinPage;
