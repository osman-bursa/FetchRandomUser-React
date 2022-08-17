import React from 'react';

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json(); // returns json formatted data

    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    // conditional rendering
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>Couldn't load the information...</div>;
    }

    return (
      <div>
        <div className="App">
          <div>
            {this.state.person.name.title}. {this.state.person.name.first} {this.state.person.name.last}
          </div>
          <img src={this.state.person.picture.large} />
          <div>Country: {this.state.person.location.country}</div>
          <div>State: {this.state.person.location.state}</div>
          <div>City: {this.state.person.location.city}</div>
        </div>
      </div>
    );
  }
}
