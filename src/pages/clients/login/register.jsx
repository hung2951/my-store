import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authAsyncRegister } from "../../../redux/features/authSlice";
import {sweetAlert} from '../../../ultils/sweetAlert'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const { meta, payload } = await dispatch(authAsyncRegister(values));
      if (meta.requestStatus == "fulfilled") {
        sweetAlert("success", "Đăng ký thành công", false, 1500);
        setTimeout(() => {
          navigate("/login");
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
        <h2 className="text-center my-3">Đăng ký</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Họ và Tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên của bạn"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <Form.Text className="text-danger">Không được để trống</Form.Text>
            )}
          </Form.Group>

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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nhập lại mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập lại mật khẩu"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <Form.Text className="text-danger">Không được để trống</Form.Text>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Đăng ký
          </Button>
        </Form>
        <p className="mt-2">
          Bạn đã có tài khoản?{" "}
          <NavLink to="/register">Đăng nhập tại đây</NavLink>
        </p>
      </Container>
    </>
  );
};

export default Register;
