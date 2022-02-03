import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

interface State {
  //   value: string;
  // todos : []
  todoList: string[];
}

interface Props {}

const Todos = ["React", "Redux", "Class"];

export class Home extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    // this.state = {
    //   value: "",
    // };
    this.state = {
      todoList: [],
    };

    console.log(this.state.todoList);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {/* form */}

        <form onSubmit={submitTodo.bind(this)}>
          <input
            type="text"
            placeholder="Todos"
            onChange={onChangeTodo.bind(this)}
            // value={this.state.value}
          />
          <button>Add Todos</button>
        </form>

        {/* todos list */}
        <ul>
          {Todos.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </>
    );
  }
}

function submitTodo(this: any, e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  //   console.log("입력 값", this.state.value);
}

function onChangeTodo(this: any, e: React.ChangeEvent<HTMLInputElement>) {
  this.setState({ value: e.target.value });
}

const mapStateToProps = (state: any) => ({
  todoList: state.todoList,
});

const mapDispatchToProp = (dispatch: any) => {
  return {
    // todoList: () => dispatch(addTodo()),
  };
};

export default connect(
  mapDispatchToProp,
  mapStateToProps
)(withRouter(Home as any));
