import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [{task: "wash the dishes"}]}
    }
    addTask = (newTask) => {
        this.setState({
            todos: [...this.state.todos, newTask ]
        });
    }

    removeTask = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    update = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos})
    }

    toggleCompletion = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos})
    }

    render() {
        const todos = this.state.todos.map((todo) =>
            <Todo
                task={todo.task}
                key={todo.id}
                id={todo.id}
                removeTodo={this.removeTask}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
                completed={todo.completed}
            />
        )
        return (
            <div>
                <h1>TodoList!</h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm addTodo={this.addTask}/>
            </div>
        )
    }
}
