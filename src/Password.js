import React, { Component } from 'react'
import { connect } from "react-redux";
import { addPassword } from "./actions";

function random(n) {
  return Math.floor(Math.random() * n)
}

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      password: 'p@$$w0rd',
      name: 'My Password',
      description: ''
    }
  }

  generatePassword() {
    // console.log('generating password');
    // make password
    //   make 8 random character

    //   assign to variable 

    // set password on state
    // console.log(str[random(str.length)]); // prints a random lowercase letter
    
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = ''
    for (let index = 0; index < 8; index+=1) {
      result = result + str[random(str.length)]
    }
    this.setState({password: result})
  }

  render() {
    return (
      <div>
        <div>
          <label> Name
            <input
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          <br />
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

        </div>

        <div>
          <button onClick={(e) => {
            this.generatePassword()
          }}>Generate</button>
        </div>

        <div>
          <button onClick={(e) => {
            this.props.addPassword(this.state.name, this.state.password)
          }}>Save</button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {
    addPassword
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Password)
