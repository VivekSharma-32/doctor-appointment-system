import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyles.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res?.data?.success) {
        message.success("User registered successfully");
        navigate("/login");
      } else {
        message.error(res?.data?.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error("Something went wrong !!");
    }
  };
  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="name" name="name">
            <Input placeholder="Name" type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" required />
          </Form.Item>
          <Link to={"/login"} className="m-2">
            Already user login
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
