import { Alert, Button, List } from "antd";
import React, { Component } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { RootSaga } from "../modules";
import { deleteTodo, getTOdo } from "../modules/actions";

interface DispatchProps {
  getTodo: typeof getTOdo;
  deleteTodo: typeof deleteTodo;
}

interface TodoListProps {
  todoList: {
    id: number;
    contents: string;
  }[];
}

interface State {
  id: number | undefined;
}

interface ReduxProps {
  todoList: any;
}

type Props = TodoListProps & DispatchProps;

export class TodoList extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      id: undefined,
    };
  }

  componentDidMount() {
    // 디스패치 함수 실행
    // 돔 트리가 그려질때 실행 didMount
    this.props.getTodo();
  }
  //   }
  render() {
    console.log(this.props);
    return (
      <List>
        {this.props.todoList.map((todo) => (
          <List.Item
            key={todo.id}
            actions={[
              <Button danger onClick={onDeleteTodo.bind(this, todo.id)}>
                삭제
              </Button>,
            ]}
          >
            {todo.contents}
          </List.Item>
        ))}
      </List>
    );
  }
}

function onDeleteTodo(this: any, id: number) {
  this.props.deleteTodo(id);
}

const mapStateToProps = (state: RootSaga): ReduxProps => ({
  todoList: state.todo.todoList,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch
) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    getTodo: () => dispatch(getTOdo()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList as any);
