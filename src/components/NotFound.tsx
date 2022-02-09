import { Button } from "antd";
import React, { Component } from "react";
import { history } from "../App";

export class NotFound extends Component {
  render() {
    return (
      <div>
        <div>잘못된페이지</div>
        <Button onClick={() => history.goBack()}>뒤로가기</Button>
      </div>
    );
  }
}

export default NotFound;
