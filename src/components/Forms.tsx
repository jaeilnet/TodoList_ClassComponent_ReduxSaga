import { Button, Col, Input, Row } from "antd";
import React, { Component } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { postTodo } from "../modules/actions";

interface Props {}

interface State {
  todoValue: string | undefined;
}

interface DispatchProps {
  postTodo: typeof postTodo;
}

export class Forms extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todoValue: "",
    };
  }

  render() {
    console.log(this.state.todoValue);
    return (
      <Row justify="center" align="middle">
        <Col span={20}>
          <Input
            placeholder="Todo"
            value={this.state.todoValue}
            onChange={onTodoValue.bind(this)}
          />
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={onAddTodo.bind(this)}>
            투두 등록
          </Button>
        </Col>
      </Row>
    );
  }
}

function onTodoValue(this: any, e: React.ChangeEvent<HTMLInputElement>) {
  this.setState({
    todoValue: e.target.value,
  });
}

function onAddTodo(this: any) {
  // post

  this.props.postTodo();
  console.log(this.state.todoValue);
}

const mapStateToProps = () => {};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch
) => {
  return {
    postTodo: () => dispatch(postTodo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);

// export default Forms;
