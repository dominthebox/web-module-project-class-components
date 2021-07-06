import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  
  handleChanges = e => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.input);
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <h2>What needs to get done today?</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChanges}
            type='text'
            name='task' 
            placeholder='What else?'
          />
          <button>Add it!</button>
        </form>
      </div>
    );
  }
}

export default App;
