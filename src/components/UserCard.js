import React, { Component } from 'react';
import './UserCard.css';

export default class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      imageUrl: './logo512.png'
    }
  }

  getRandomCard = () => {
    fetch(' https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        const user = data.results[0];
        console.log(user);
        this.setState({ 
          imageUrl: user.picture.large,
          userName: `Hi, my name is ${user.name.first} ${user.name.last}`,
          userEmail: user.email,
          userPhone: user.phone,
          userState: `Party at my place in ${user.location.country}!`,
          userAddress: `${user.location.street.number} ${user.location.street.name}, ${user.location.city} ${user.location.state}`, 
          userBirthday: user.dob.date,
          userAge: user.dob.age,
          isVisible: true,
        })
      })
  }

  handleClick = () => {
    this.getRandomCard();
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
            <h3>{ this.state.userName }</h3>
            <h4>{ this.state.userState }</h4>
            <p>{ this.state.userAddress }</p>
            <p><b>Email me:</b> { this.state.userEmail }</p>
            <p><b>Holla:</b> { this.state.userPhone }</p>
            <p>I am { this.state.userAge} and my birthday is { this.state.userBirthday }.</p>
          </div>
        </div>
        <div>
          <button className="userButton" onClick={ this.handleClick }>Click to get random user</button>
        </div>
      </div>
    )
  }
}
