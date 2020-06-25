import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './actions/todos';


class TodoList extends Component {

    constructor(props) {
        super(props);

        console.log(props)
    }

    state = {
        newTextTodo: ''
    }

    addNewTextTodo = () => {
        this.props.addTodo(this.state.newTextTodo)
        this.setState({ newTextTodo: "" })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}

                </ul>
                <input
                    type="text"
                    value={this.state.newTextTodo}
                    onChange={(e) => this.setState({ newTextTodo: e.target.value })}
                />

                <button onClick={this.addNewTextTodo}>Novo Todo</button>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapToDispatchProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapToDispatchProps)(TodoList);
