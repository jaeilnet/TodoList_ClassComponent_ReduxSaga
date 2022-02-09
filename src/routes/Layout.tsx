import React, { Component } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { UserInfo, loginCheck } from "../modules/auth/action";
import Login from "../page/Login";
import NotFound from "../components/NotFound";
import Header from "../components/Header";
import { RootSaga } from "../modules";
import Home from "../page/Home";

interface ReduxProps {
  loginInfo: UserInfo;
}

interface DispatchProps {
  loginCheck: typeof loginCheck;
}
interface LayoutProps {}

type Props = LayoutProps & DispatchProps & ReduxProps;

interface State {
  loginState: boolean;
}

const PrivateRoute: React.FC<any> = ({
  component: CustomComponent,
  isLogin,
  path,
  ...rest
}) => {
  const renderCustomerComponent = (props: any) => (
    <CustomComponent {...props} />
  );

  if (isLogin) {
    return <Route {...rest} render={renderCustomerComponent} />;
  }

  return <Route component={NotFound} />;
};

const PublicRoute: React.FC<any> = ({
  component: CustomComponent,
  isLogin,
  path,
  ...rest
}) => {
  if (!isLogin) {
    const renderCustomerComponent = (props: any) => (
      <CustomComponent {...props} />
    );
    return <Route {...rest} render={renderCustomerComponent} />;
  }

  return <Route component={NotFound} />;
};

export class Layout extends Component<Props, State> {
  state = {
    loginState: false,
  };

  componentDidMount() {
    // 토큰이 있으면 Login true
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin) {
      this.props.loginCheck(isLogin as string);
      return;
    }
  }

  render() {
    const { isLogin } = this.props.loginInfo;
    return (
      <>
        <Header />
        <Switch>
          <PrivateRoute isLogin={isLogin} path="/home" component={Home} />
          <PublicRoute isLogin={isLogin} path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
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
    loginCheck: (token) => dispatch(loginCheck(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout as any));
