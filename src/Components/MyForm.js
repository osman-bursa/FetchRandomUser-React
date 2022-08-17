import React from 'react';

class MyForm extends React.Component {
  state = {
    name: 'Simon',
    favoritePet: '',
    rememberMe: false,
    title: 'Mr.',
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Input Name</h3>
        <input name="name" value={this.state.name} onChange={this.handleChange} />

        <textarea name="favoritePet" value={this.state.favoritePet} onChange={this.handleChange} />

        <input
          name="rememberMe"
          onChange={this.handleChange}
          checked={this.state.rememberMe}
          type="checkbox"
        />

        <div>
          <select name="title" value={this.state.title} onChange={this.handleChange}>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Miss.</option>
            <option>Ms.</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
