import { Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <Row justify="center" align="middle">
        <Title>Todo List</Title>
      </Row>
    );
  }
}

export default Header;
