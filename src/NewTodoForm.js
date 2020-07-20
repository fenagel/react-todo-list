import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

// NewTodoForm - this component should render a form with one text input for the task to be created.
// When this form is submitted, a new Todo component should be created.


export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuidv4(), completed: false}
        this.props.addTodo(newTodo);
        this.setState({
            task: ''
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Task</label>
                    <input
                        placeholder="New Todo"
                        type="text"
                        name="task"
                        value={this.state.task}
                        id="task"
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}
