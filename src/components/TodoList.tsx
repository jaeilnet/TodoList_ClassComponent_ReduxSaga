import { Alert, Button, Checkbox, Col, Input, List, Row } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import React, { ChangeEvent, Component } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { RootSaga } from "../modules";
import {
  deleteTodo,
  getTodoAPI,
  patchTodoStatus,
  patchTodoText,
} from "../modules/todo/actions";
import styled from "styled-components";
import confirm from "antd/lib/modal/confirm";
import { UserInfo } from "../modules/auth/action";
import { TodoDataType } from "../modules/todo/reducer";
interface DispatchProps {
  getTodoAPI: typeof getTodoAPI;
  deleteTodo: typeof deleteTodo;
  patchTodoStatus: typeof patchTodoStatus;
  patchTodoText: typeof patchTodoText;
}

interface ReduxProps {
  todoList: TodoDataType[];
  loginInfo: UserInfo;
}

interface TodoListProps {}

interface State {
  id: number | undefined;
  editText: string;
  todoStatus: {
    checkId: number | undefined;
    status: boolean;
  };
}

type Props = TodoListProps & DispatchProps & ReduxProps;

export class TodoList extends Component<Props, State> {
  state = {
    id: undefined,
    editText: "",
    todoStatus: {
      checkId: undefined,
      status: false,
    },
  };

  showDeleteConfirm = (e: React.MouseEvent, todoId: number): void => {
    // 삭제 api

    const onDeleteAPI = () => this.props.deleteTodo(todoId);

    confirm({
      title: "Todo 삭제",
      content: "투두를 삭제 하시겠습니까",
      okText: "삭제",
      okType: "danger",
      cancelText: "아니요",
      onOk() {
        onDeleteAPI();
      },
      onCancel() {},
    });
  };

  showEditConfirm = (
    e: React.MouseEvent,
    { id, status, contents }: TodoDataType
  ): void => {
    let edit: TodoDataType = {
      id,
      status,
      contents,
    };
    const onChangeEditText = (e: ChangeEvent<HTMLInputElement>): void => {
      edit = {
        id,
        status,
        contents: e.target.value,
      };
    };

    const onEditText = () => this.props.patchTodoText(edit);

    const editContent = (
      <Row gutter={12} align="middle" justify="center">
        <Col>
          <span>Todo :</span>
        </Col>
        <Col>
          <Input
            bordered={false}
            placeholder={contents}
            defaultValue={contents}
            type="text"
            maxLength={50}
            onChange={onChangeEditText}
          />
        </Col>

        <Col>
          {status ? (
            <Checkbox checked disabled>
              완료
            </Checkbox>
          ) : (
            <Checkbox disabled>완료</Checkbox>
          )}
        </Col>
      </Row>
    );

    confirm({
      title: "Todo 수정",
      content: editContent,
      okText: "수정",
      okType: "primary",
      cancelText: "취소",
      onOk() {
        onEditText();
      },
      onCancel() {},
    });
  };

  onTodoStatus = (e: CheckboxChangeEvent, id: number): void => {
    // 투두 완료 체크박스 boolean

    this.props.patchTodoStatus(id);

    const toggle = e.target.checked;

    this.setState({
      todoStatus: {
        checkId: id,
        status: toggle,
      },
    });
  };

  componentDidMount() {
    // 디스패치 함수 실행
    // 돔 트리가 그려질때 실행 didMount
    if (this.props.loginInfo.isLogin) {
      this.props.getTodoAPI();
      return;
    }
  }

  render() {
    const { todoStatus } = this.state;
    const { todoList } = this.props;
    return (
      <>
        <AntdList bordered>
          {todoList.map((todo: any) => (
            <List.Item
              key={todo.id}
              actions={[
                <>
                  {/* 체크박스 체크 boolean */}
                  {todo.id === todoStatus.checkId && todoStatus.status ? (
                    <Checkbox
                      checked
                      onChange={(e: CheckboxChangeEvent) =>
                        this.onTodoStatus(e, todo.id)
                      }
                      value={todo.id}
                    >
                      완료
                    </Checkbox>
                  ) : (
                    <Checkbox
                      onChange={(e: CheckboxChangeEvent) =>
                        this.onTodoStatus(e, todo.id)
                      }
                      value={todo.id}
                    >
                      완료
                    </Checkbox>
                  )}
                  <Button
                    style={{ margin: "0 5px" }}
                    onClick={(e: React.MouseEvent) =>
                      this.showEditConfirm(e, todo)
                    }
                  >
                    수정
                  </Button>
                  <Button
                    danger
                    onClick={(e: React.MouseEvent) =>
                      this.showDeleteConfirm(e, todo.id)
                    }
                  >
                    삭제
                  </Button>
                </>,
              ]}
            >
              {todo.contents}
            </List.Item>
          ))}
        </AntdList>
      </>
    );
  }
}

const mapStateToProps = (state: RootSaga): ReduxProps => ({
  todoList: state.todo.todoList,
  loginInfo: state.login.loginInfo,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch
) => {
  return {
    getTodoAPI: () => dispatch(getTodoAPI()),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    patchTodoText: (edit) => dispatch(patchTodoText(edit)),
    patchTodoStatus: (id) => dispatch(patchTodoStatus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList as any);

const AntdList = styled(List)`
  .ant-list-item {
    :hover {
      background-color: #f6f6f6;
    }
  }
`;
