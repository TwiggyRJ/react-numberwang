import React, { Component } from 'react';
class Numberwang extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', match: '', numberwang: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});

    let number = parseInt(e.target.value);
    let numberwang = [];

    for (let i = 0; i < 26; i++) {
      numberwang.push(Math.floor(Math.random() * 101));
    }

    if (numberwang.indexOf(number) === -1) {
      this.setState({match: true});
      console.log(true);
    } else {
      console.log(false);
      this.setState({match: false});
    }
    console.log(numberwang);
    console.log(number);
    console.log(numberwang.indexOf(number));
  }

  handleSubmit(e) {
    if (this.state.match === true) {
      document.getElementById('numberwang-target').insertAdjacentHTML('beforeend', '<div>' + this.state.value + ': Thats Numberwang!</div>');
    } else {
      document.getElementById('numberwang-target').insertAdjacentHTML('beforeend', '<div>That not Numberwang! You Lose!</div>');
    }

    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input className="input-large" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Say a number between 1 and 101"/>
        </label>
        <input type="submit" value="Submit" />
        <div id="numberwang-target" className="numberwang-box"></div>

      </form>
    );
  }
}

export default Numberwang;
