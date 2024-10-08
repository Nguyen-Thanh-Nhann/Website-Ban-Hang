import React, { useState, useEffect } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from '../../components/Message/Message';

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const mutation = useMutationHooks(data => UserService.signupUser(data));
  const { data, isPending, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess && data?.message === 'SUCCESS') {
      message.success();
      handleNavigateSignIn();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const navigate = useNavigate();

  const handleOnchangeEmail = (value) => setEmail(value);
  const handleOnchangePassword = (value) => setPassword(value);
  const handleOnchangeConfirmPassword = (value) => setConfirmPassword(value);
  const handleOnchangeName = (value) => setName(value);
  const handleOnchangePhone = (value) => setPhone(value);
  const handleOnchangeCity = (value) => setCity(value);
  const handleOnchangeAddress = (value) => setAddress(value);

  const handleNavigateSignIn = () => {
    navigate('/sign-in');
  };

  const handleSignUp = () => {
    if (!email.includes('@')) {
      return message.error('Email không hợp lệ');
    }
    if (password !== confirmPassword) {
      return message.error('Mật khẩu và xác nhận mật khẩu không khớp');
    }
    if (password.length < 6) {
      return message.error('Mật khẩu phải ít nhất 6 ký tự');
    }
    if (!name || !phone || !city || !address) {
      return message.error('Vui lòng điền đầy đủ thông tin');
    }

    mutation.mutate({
      email,
      password,
      confirmPassword,
      name,
      phone,
      city,
      address,
    });
    console.log("sign-up", { email, password, confirmPassword, name, phone, city, address });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', borderRadius: '6px', background: '#fff', display: 'flex', padding: '20px' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng ký tài khoản mới</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="Họ và tên" value={name} onChange={handleOnchangeName} />
          <InputForm style={{ marginBottom: '10px' }} placeholder="Số điện thoại" value={phone} onChange={handleOnchangePhone} />
          <InputForm style={{ marginBottom: '10px' }} placeholder="Thành Phố" value={city} onChange={handleOnchangeCity} />
          <InputForm style={{ marginBottom: '10px' }} placeholder="Địa chỉ nhà" value={address} onChange={handleOnchangeAddress} />
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="Mật khẩu"
              style={{ marginBottom: '10px' }}
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="Hãy nhập lại mật khẩu"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
            />
          </div>
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
          <Loading isPending={isPending}>
            <ButtonComponent
              disabled={!email.length || !password.length || !confirmPassword.length || !name.length || !phone.length || !city.length || !address.length}
              onClick={handleSignUp}
              size={40}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 10px'
              }}
              textButton={'Đăng ký'}
              styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
          </Loading>
          <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn} > Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
            preview={false}
            alt="sign-in logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại </h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};
export default SignUpPage;
