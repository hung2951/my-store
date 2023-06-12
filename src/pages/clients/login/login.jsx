import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authAsyncLogin } from "../../../redux/features/authSlice";
import { sweetAlert } from "../../../ultils/sweetAlert";
import { setCookie } from "../../../ultils/cookies";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
      try {
        const { meta, payload } = await dispatch(authAsyncLogin(values));
        if (meta.requestStatus == "fulfilled") {
          sweetAlert("success", "Đăng nhập thành công", false, 1500);
          setCookie("token", payload.token, 1,"path=/");
          setTimeout(() => {
            navigate("/");
          }, 1600);
        } else {
          sweetAlert("warning", payload.message, true, false);
        }
      } catch (error) {
        sweetAlert("error", error, true, false);
      }
  };
  return (
    <>
      <Container className="mt-5 container-form-login">
        <h2 className="text-center my-3">Đăng nhập</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <Form.Text className="text-danger">Không được để trống</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <Form.Text className="text-danger">Không được để trống</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Đăng nhập
          </Button>
        </Form>
        <p className="mt-2">
          Bạn chưa có tài khoản?{" "}
          <NavLink to="/register">Đăng ký tại đây</NavLink>
        </p>
      </Container>
    </>
  );
};

export default Login;
