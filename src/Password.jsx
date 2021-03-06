import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPassword } from './actions';

function random(n) {
  return Math.floor(Math.random() * n);
}

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'p@$$w0rd',
      name: 'My Password',
      description: '',
    };
  }

  generatePassword() {
    // console.log('generating password');
    // make password
    //   make 8 random character

    //   assign to variable

    // set password on state
    // console.log(str[random(str.length)]); // prints a random lowercase letter

    const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let index = 0; index < 8; index += 1) {
      result = result + str[random(str.length)];
    }
    this.setState({ password: result });
  }

  render() {
    return (
      <div>
        <div>
          <label>
            Name:
          </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />

          <br />
          <label>
            Unique description of password:
          </label>
          <br />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => { this.setState({ description: e.target.value }); }}
          />
          <br />
          <br />
          <hr />
          <div>
            <button
              type="button"
              onClick={(e) => {
                this.generatePassword();
              }}
            >
              Generate a New Password
            </button>
          </div>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={(e) => { this.setState({ password: e.target.value }); }}
          />

        </div>
        <div>
          <button
            type="button"
            onClick={(e) => {
              this.props.addPassword(this.state.name, this.state.password);
            }}
          >
            Save
          </button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = () => ({
  addPassword,
});

export default connect(mapStateToProps, mapDispatchToProps())(Password);
