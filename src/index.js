import React from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
      constructor(props) {
            // Have to call this at the beginning of constructor, connects with React.Component object
            super(props);
            // Only time we do direct assignment to this.state, otherwise it's setState
            this.state = { lat: null, errorMessage: '' };

            window.navigator.geolocation.getCurrentPosition(
                  (position) => this.setState({ lat: position.coords.latitude }),
                  (err) => this.setState({ errorMessage: err.message })
            );
      }

      render() {
            if (this.state.errorMessage && !this.state.lat) {
                  return <div>Error: {this.state.errorMessage}</div>;
            }
            if (!this.state.errorMessage && this.state.lat) {
                  return <div>Latitude: {this.state.lat}</div>;
            }
            return <div>Loading!</div>;
      }
}

ReactDOM.render(<App />, document.querySelector('#root'));
