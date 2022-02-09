import { Button, Col, Input, Row } from "antd";
import React, { ChangeEvent, Component } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { loginAPI } from "../modules/auth/action";

interface DispatchProps {
  loginAPI: typeof loginAPI;
}

interface State {
  userId: string;
  password: string;
}

type Props = DispatchProps;

export class Login extends Component<Props, State> {
  state = {
    userId: "",
    password: "",
  };

  onChangeId = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      userId: e.target.value,
    });
  };

  onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmitLogin = (e: React.MouseEvent): void => {
    const { userId, password } = this.state;

    const userInfo = {
      id: userId,
      password,
    };

    this.props.loginAPI(userInfo);
  };

  render() {
    return (
      <Row justify="center" align="bottom">
        <Col span={12}>
          <Input
            type="email"
            placeholder="3글자 이상 아이디"
            onChange={this.onChangeId}
            minLength={3}
          />
          <Input
            type="password"
            placeholder="6자 이상 비밀번호"
            onChange={this.onChangePassword}
            minLength={6}
          />
          <Col span={12}>
            <Button onClick={this.onSubmitLogin}>로그인하기</Button>
          </Col>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch
) => {
  return {
    loginAPI: (userInfo) => dispatch(loginAPI(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Login as any);
