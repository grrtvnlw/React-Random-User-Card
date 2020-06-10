import React, { Component } from 'react';
import './UserCard.css';

export default class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }
  }

  getRandomCard = () => {
    fetch(' https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        const user = data.results[0];
        console.log(user)
        this.setState({ imageUrl: user.picture.large })
        this.setState({ userName: `Hi, my name is ${user.name.first} ${user.name.last}` })
        this.setState({ userEmail: `Email me: ${user.email}` })
        this.setState({ userPhone: `Holla at me: ${user.phone}` })
      })
  }

  handleClick = () => {
    this.getRandomCard();
    this.setState({ isVisible: true})
  }

  render() {

    let innerClass = 'userCard'

    if (this.state.isVisible) {
      innerClass += ' visible'
    }

    return (
      <div className="container">
        <div className={ innerClass }>
          <div className="imageDiv">
            <img className="userPicture" src={ this.state.imageUrl } alt="" />
          </div>
          <div className="contentDiv">
            <h4>{ this.state.userName }</h4>
            <p>{ this.state.userEmail }</p>
            <p>{ this.state.userPhone }</p>
          </div>
        </div>
        <div>
          <button className="userButton" onClick={ this.handleClick }>Click to get random user</button>
        </div>
      </div>
    )
  }
}
