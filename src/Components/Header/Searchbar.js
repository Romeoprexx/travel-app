import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'New York', label: 'New York' },
  { value: 'Las Vegas', label: 'Las Vegas' },
  { value: 'Rome', label: 'Rome' },
  { value: 'Paris', label: 'Paris' },
  { value: 'London', label: 'London' },
  { value: 'Dubai', label: 'Dubai' },
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'Madrid', label: 'Madrid' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Venice', label: 'Venice' },
  { value: 'Milan', label: 'Milan' },
  { value: 'Naples', label: 'Naples' },
  { value: 'Budapest', label: 'Budapest' },
  { value: 'Edinburg', label: 'Edinburg' },
  { value: 'Florence', label: 'Florence' },
  { value: 'Sydney', label: 'Sydney' },
  { value: 'Toronto', label: 'Toronto' },
  { value: 'Bermuda', label: 'Bermuda' },
  { value: 'Manila', label: 'Manila' },
  { value: 'Berlin', label: 'Berlin' },
  
];




const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    marginTop: '10px',
    marginLeft: '30px',
    fontSize: '14px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

class Searchbar extends Component {
  state = {
    selectedOption: null,
    options: true
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
  };

  onClick = options => {
    this.setState({options: false})
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="search-bar">
        <div className="select-city-large">
          <div className="select-div">
            <Select
              styles={customStyles}
              placeholder="Select City"
              selectedOption={selectedOption}
              onChange={this.handleChange}
              options={options}
              onClick={options}
            />
          </div>
        </div>
        <div className="select-experience-large" />
        <button onSubmit={this.handleChange} id="go">Explore</button>
      </div>
    );
  }
}

export default Searchbar;
