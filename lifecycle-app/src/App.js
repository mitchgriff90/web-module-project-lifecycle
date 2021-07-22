import './App.css';
import React from 'react';
import axios from 'axios';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      usercards: [],
      followers: []
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/mitchgriff90`)
    .then(res => {
      this.setState({usercards: res.data});
    })
    axios.get('https://api.github.com/users/mitchgriff90/followers')
      .then(res => {
        console.log(res.data);
        this.setState({ followers: res.data });
    })
      .catch(err => {console.log(err);
    });
  }


  render() {
    const myStyle = {
      width: "100%",
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      border: '5px',
      boxShadow: '0 1px 6px -2px #000',
      backgroundColor: '#808000',
      marginBottom: '30px'
    }

    return (
      <div className="App-header">
        <h1> My Usercards </h1>
        <div> 
          <h2 style={myStyle}>{this.state.usercards.name}</h2>
          <h3 style={myStyle}>{this.state.usercards.bio}</h3>
        </div>


				<h3>Follower Count: {this.state.usercards.followers}</h3>
				<h3>Followers:</h3>
				{this.state.followers.map((follower, i) => {
					return <h4 key={i}>{follower.login}</h4>;
				})}
				<h3>Following: {this.state.usercards.following}</h3>
				<h3>Public Repos: {this.state.usercards.public_repos}</h3>
				<h3>Git Repo: {this.state.usercards.html_url}</h3>

      </div>
    )
  }
}

export default App;
