import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {

  state = { value: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = event => {
    const { value } = event.currentTarget;

    this.setState({
      value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;

    value && this.props.onSubmit(value);

    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };
  
  
  render() {
  const { value } = this.state;
  
  return (
  <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
  )}
}

export default Searchbar;