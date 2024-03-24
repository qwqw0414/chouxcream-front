import AuthFormInput from "@/components/common/AuthFormInput";
import ContentsWrapper from "@/components/layout/ContentsWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "../join/JoinPage";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <ContentsWrapper tabType={undefined} block={'md'}>
      <div className="max-w-7xl m-auto min-h-[calc(100vh-270px)]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[400px] pt-[60px] m-auto"
        >
          <h2 className="flex justify-center pb-[50px]">
            <img
              src="/img/login_title.png"
              alt=""
              className="w-[250px] h-[56px]"
            />
          </h2>
          <AuthFormInput
            label="이메일 주소"
            type="email"
            placeholder="예) choux@choux.co.kr"
            register={register}
            pattern={
              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
            }
            patternMessage="이메일 주소를 정확히 입력해주세요."
            errors={errors.email?.message}
            name="email"
          />
          <AuthFormInput
            label="비밀번호"
            type="password"
            placeholder="영문, 숫자, 특수문자 조합 8-16자"
            register={register}
            pattern={
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/
            }
            patternMessage="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
            errors={errors.password?.message}
            name="password"
          />
          <Button
            type="submit"
            disabled={!isValid}
            className={`w-full rounded-xl h-[52px] ${
              !!isValid ? "bg-[#222]" : "bg-[#ebebeb]"
            } font-bold text-[16px] cursor-default`}
          >
            로그인
          </Button>
          <ul className="flex justify-evenly text-[13px] mt-5">
            <li className="flex-1 flex">
              <Link to="/" className="px-[10px] m-auto">
                이메일 가입
              </Link>
            </li>
            <li className="flex-1 flex before:bg-[#d3d3d3] before:w-px before:h-[13px]">
              <Link to="/" className="px-[10px] m-auto">
                이메일 찾기
              </Link>
            </li>
            <li className="flex-1 flex before:bg-[#d3d3d3] before:w-px before:h-[13px]">
              <Link to="/" className="px-[10px] m-auto">
                비밀번호 가입
              </Link>
            </li>
          </ul>
          <div className="flex flex-col mt-10 ">
            <Button
              type="button"
              className="mb-2 text-base bg-white text-black border border-[#d3d3d3] shadow-none rounded-xl relative hover:shadow-none"
            >
              <img
                src="/img/naver_logo.svg"
                alt=""
                className="w-4 h-4 absolute top-[15px]"
              />
              네이버로 로그인
            </Button>
            <Button
              type="button"
              className="text-base bg-white text-black border border-[#d3d3d3] shadow-none rounded-xl relative hover:shadow-none"
            >
              <img
                src="/img/apple_logo.svg"
                alt=""
                className="w-4 h-5 absolute top-[15px]"
              />
              Apple로 로그인
            </Button>
          </div>
        </form>
      </div>
    </ContentsWrapper>
  );
};

export default LoginPage;
