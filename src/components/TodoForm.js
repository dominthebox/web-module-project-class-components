import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todoItem: ''
        }
    }

    handleChanges = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.todoItem);
        this.setState({
            todoItem: '',
        })
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="todo-input">Add Todo:
                <input onChange={this.handleChanges}
                    id="todo-input"
                    value={this.state.todoItem}
                    type='text'
                    name='todoItem' 
                    placeholder='What else?'
                />
            </label>
            <button>Add it!</button>
        </form>
        )
    }
}

export default TodoForm