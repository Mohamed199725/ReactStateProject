import React, { Component } from 'react';
import './App.css'; // Importing the CSS file

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A software engineer that works on both ends, frontend and backend looking to build a professional career.',
        imgSrc: '/person.jpg',
        profession: 'Software Engineer',
      },
      show: false,
      mountTime: null,
    };
  }

  componentDidMount() {
    this.setState({ mountTime: new Date() });

    // Set up an interval to update the time every second
    this.intervalId = setInterval(() => {
      this.forceUpdate(); // Force a re-render to update the time
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // this is the toggleshow function to be called later in the app
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div>
        <h1 className='title-container'>Stateful Component</h1>
        <p>
          <span className="time-since-mount-text">Time since mount:</span> {Math.floor((new Date() - mountTime) / 1000)}{/*calculating the time elapsed since the component was mounted */} seconds
        </p>
        <button className="custom-button" onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {show && (
          <div className="profile-container">
            <h2 className="name">{person.fullName}</h2>
            <p>{person.bio}</p>
            <img className="profile-image" src={person.imgSrc} alt="Profile" />
            <p>
              <span className="profession-label">Profession:</span> {person.profession}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;