import AuthFormInput from "@/components/common/AuthFormInput";
import ContentsWrapper from "@/components/layout/ContentsWrapper";
import AuthWrapper from "@/components/layout/AuthWrapper";
import { useForm, SubmitHandler } from "react-hook-form";

// "이메일 아이디 찾기" 폼에서 사용될 입력 필드의 타입
interface IFormInput {
  phone?: string; // 사용자 휴대폰 번호 입력 필드
}

const FindEmailPage: React.FC = () => {

  /** useForm hook 사용하여 폼 관리 설정 */ 
  const {
    register, // 폼 등록
    handleSubmit, // 폼 제출
    formState: { isValid },
  } = useForm<IFormInput>({
    mode: "onChange", // 유효성 검사 모드 - onChange : 사용자가 입력할 때마다 폼의 유효성 검사
  });

  /** 폼 제출 시 실행될 콜백 함수 */
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  /** "이메일 아이디 찾기" 기능에 대한 안내 문구  */ 
  const notice = "가입 시 등록한 휴대폰 번호를 입력하면\n이메일 주소의 일부를 알려드립니다.";

  return (
    <ContentsWrapper>
      <AuthWrapper
        title="이메일 아이디 찾기"
        notice={notice}
        isFormValid={isValid}
        buttonType="이메일 아이디 찾기"
      >
        {/* 폼 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 휴대폰 번호 인풋 */}
          <AuthFormInput
            label="휴대폰 번호"
            type="number"
            placeholder="가입하신 휴대폰 번호"
            register={register}
            pattern={/^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/}
            patternMessage="휴대폰 번호를 정확히 입력해주세요."
            name="phone"
          />
        </form>
      </AuthWrapper>
    </ContentsWrapper>
  );
};

export default FindEmailPage;
