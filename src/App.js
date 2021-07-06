import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <h2>What needs to get done today?</h2>
        <form>
          <input
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
