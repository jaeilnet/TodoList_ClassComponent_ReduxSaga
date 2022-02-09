import { Button, Col, Input, Row } from "antd";
import React, { Component } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import styled from "styled-components";
import { postTodoAPI } from "../modules/todo/actions";

interface State {
  todoText: string;
}

interface DispatchProps {
  postTodo: typeof postTodoAPI;
}

type Props = DispatchProps;

export class Forms extends Component<Props, State> {
  state = {
    todoText: "",
  };

  onTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      todoText: e.target.value,
    });
  };

  onAddTodo = () => {
    if (this.state.todoText.trim().length <= 0) {
      return alert("todo 적어주세요");
    }
    this.props.postTodo(this.state.todoText);
  };

  render() {
    const { todoText } = this.state;
    return (
      <Grid>
        <Input
          placeholder="Todo"
          value={todoText}
          onChange={this.onTodoText}
          maxLength={50}
        />
        <Button type="primary" onClick={this.onAddTodo}>
          투두 등록
        </Button>
      </Grid>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch
) => {
  return {
    postTodo: (text: string) => dispatch(postTodoAPI(text)),
  };
};

export default connect(null, mapDispatchToProps)(Forms);

const Grid = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
