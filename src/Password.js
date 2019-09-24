import React, { Component } from 'react'

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { password: 'p@$$w0rd'}
    this.state = { description: ''}
  }

  generatePassword() {
    console.log('generating password');
    
  }

  render() {
    return (
      <div>
        <div>
          <label>Unique description of password:
            <input
                type="text" name="description"
                value={this.state.description}
                onChange={(e) => {this.setState({ description: e.target.value })}}
              />
          </label>
            <br />
          <label>
            Password:
            <input
              type="text" name="password"
              value={this.state.password}
              onChange={(e) => {this.setState({ password: e.target.value })}}
            />
          </label>
          <input type="submit" value="Submit" />
        </div>
        {/* <div>{this.state.password}</div> */}

        <div>
          <button onClick={(e) => {
            this.generatePassword()
          }}>Generate</button>
        </div>

      </div>
    )
  }
}

export default Password