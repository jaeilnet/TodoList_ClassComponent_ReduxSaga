import { Col, Row } from "antd";
import React, { Component } from "react";
import Forms from "../components/Forms";
import TodoList from "../components/TodoList";

export class Home extends Component {
  render() {
    return (
      <Row justify="center" align="middle" wrap>
        <Col span={12}>
          <Forms />
          <TodoList />
        </Col>
      </Row>
    );
  }
}

export default Home;
