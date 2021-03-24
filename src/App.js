import React, { Component } from "react";
class App extends Component {
  state = {
    user: [],
  };

  saveUser = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewUser = () => {
    let { user: newUser, input } = this.state;
    newUser.push(input);
    this.setState({user: newUser});
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.saveUser}
        />
        <button onClick={this.addNewUser}> Add User </button>
        <ol>
          {this.state.user.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>
      </div>
    );
  }
}

export default App;
