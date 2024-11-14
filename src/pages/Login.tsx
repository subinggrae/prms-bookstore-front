import { useNavigate } from "react-router-dom";
import { useAlert } from "../hooks/useAlert";
import { useForm } from "react-hook-form";
import { SignupProps, SignupStyle } from "./Signup";
import Title from "../components/commons/Title";
import InputText from "../components/commons/InputText";
import Button from "../components/commons/Button";
import { login } from "../api/auth.api";
import { useAuthStore } from "../store/authStore";

function Login() {
  const navigate = useNavigate();
  const showAlert = useAlert();

  const { isLoggedIn, storeLogin } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    login(data).then((res) => {
      storeLogin(res.token);

      showAlert("로그인되었습니다.");
      navigate("/");
    }, (error) => {
      showAlert("로그인이 실패했습니다.");
    });
  };

  console.log(isLoggedIn);

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
