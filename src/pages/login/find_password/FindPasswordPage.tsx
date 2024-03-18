import FindFormInput from "@/components/common/FindFormInput";
import ContentsWrapper from "@/components/layout/ContentsWrapper";
import FindWrapper from "@/components/layout/FindWrapper";
import { useForm, SubmitHandler } from "react-hook-form";

export interface IFormInput {
  phone?: string; 
  email?: string;
}

const FindPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const notice =
    "가입 시 등록하신 휴대폰 번호와 이메일을 입력하시면,\n휴대폰으로 임시 비밀번호를 전송해 드립니다.";

  return (
    <ContentsWrapper>
      <FindWrapper
        title="비밀번호 찾기"
        notice={notice}
        isFormValid={isValid}
        buttonType="문자 발송하기"
      >
        {/* 폼 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 휴대폰 번호 인풋 */}
          <FindFormInput
            label="휴대폰 번호"
            type="number"
            placeholder="가입하신 휴대폰 번호"
            register={register}
            pattern={/^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/}
            patternMessage="휴대폰 번호를 정확히 입력해주세요."
            errors={errors.phone?.message}
            name="phone"
          />

          {/* 이메일 주소 인풋 */}
          <FindFormInput
            label="이메일 주소"
            type="text"
            placeholder="예) kream@kream.co.kr"
            register={register}
            pattern={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
            patternMessage="이메일 주소를 정확히 입력해주세요."
            errors={errors.email?.message}
            name="email"
          />
        </form>
      </FindWrapper>
    </ContentsWrapper>
  );
};

export default FindPasswordPage;
