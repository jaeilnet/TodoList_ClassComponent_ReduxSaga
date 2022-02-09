import { Button, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { Component } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { history } from "../App";
import { RootSaga } from "../modules";
import { logOutMiddle, UserInfo } from "../modules/auth/action";

interface ReduxProps {
  loginInfo: UserInfo;
}
interface DispatchProps {
  logOutMiddle: typeof logOutMiddle;
}

interface HeaderProps {}

type Props = HeaderProps & DispatchProps & ReduxProps;

interface State {}
export class Header extends Component<Props, State> {
  logOut = () => {
    this.props.logOutMiddle();
  };

  render() {
    const { loginInfo } = this.props;
    return (
      <Row justify="space-around" align="middle">
        <Title>Todo List</Title>
        <Grid>
          <h3 style={{ margin: "0 10px" }}>
            {loginInfo.userId ? loginInfo.userId : "비로그인"}님
          </h3>
          {loginInfo.isLogin ? (
            <Button onClick={this.logOut}>로그아웃</Button>
          ) : (
            <Button onClick={() => history.push("/login")}>로그인</Button>
          )}
        </Grid>
      </Row>
    );
  }
}

const mapStateToProps = (state: RootSaga): ReduxProps => ({
  loginInfo: state.login.loginInfo,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch
) => {
  return {
    logOutMiddle: () => dispatch(logOutMiddle()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header as any));

const Grid = styled.div`
  display: flex;
`;
