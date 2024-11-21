import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import Button from "../components/commons/Button";
import InputText from "../components/commons/InputText";
import Title from "../components/commons/Title";
import { SignupStyle } from "./Signup";

export interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const { userLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit = (data: LoginProps) => {
    userLogin(data);
  };

  return (
    <>
      <Title size="large">로그인</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              type="email"
              {...register("email", { required: true })}
              inputMode="email"
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset>
            <InputText
              placeholder="비밀번호"
              type="password"
              {...register("password", { required: true })}
              inputMode="text"
            />
            {errors.password && (
              <p className="error-text">비밀번호를 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset>
            <Button size="medium" scheme="primary">
              로그인
            </Button>
          </fieldset>
        </form>
      </SignupStyle>
    </>
  );
}

export default Login;
