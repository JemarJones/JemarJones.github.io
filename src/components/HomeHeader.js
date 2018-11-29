import React from 'react';
import Select from 'react-select';
import projects from '../data/projects';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);

    this.options = this.getOptions(projects);
    this.state = {
      jemarRole: this.options[0],
    };
  }

  getOptions = projects => {
    // TODO: Maybe sort this by most occurrences in projects?
    return (
      projects
        // Get the list of tech from each project
        .map(p => p.tech)
        // Combine and dedupe the lists
        .reduce(
          (acc, curr) => {
            return [...new Set([...acc, ...curr.map(tech => tech.name)])];
          },
          ['some things'],
        )
        // Format each item for react-select
        .map(name => ({ value: name, label: name }))
    );
  };

  handleRoleChange = value => {
    this.setState({ jemarRole: value });
  };

  searchTheme = theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#f4faff',
      neutral0: '#555b6e',
      primary25: 'rgba(244, 250, 255, 0.1)',
      neutral50: 'rgba(244, 250, 255, 0.5)',
    },
    spacing: {
      ...theme.spacing,
      controlHeight: 20,
    },
  });

  get customStyles() {
    return {
      control: provided => ({
        ...provided,
        fontSize: '4rem',
      }),
      container: provided => ({
        ...provided,
        marginTop: 0,
        marginLeft: 20,
        marginRight: 20,
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.hasValue ? state.theme.colors.primary : provided.color,
      }),
      input: (provided, state) => ({
        ...provided,
        color: state.theme.colors.primary,
      }),
      indicatorSeparator: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused
          ? state.theme.colors.primary
          : provided.backgroundColor,
      }),
      dropdownIndicator: (provided, state) => ({
        ...provided,
        color: state.isFocused ? state.theme.colors.primary : provided.color,
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.theme.primary,
        backgroundColor: state.isSelected
          ? state.theme.colors.neutral50
          : provided.backgroundColor,
      }),
    };
  }

  render() {
    const { jemarRole } = this.state;
    return (
      <header className="home__header">
        <div className="container">
          Jemar knows
          {
            <Select
              className="input home__header__search"
              classNamePrefix="home__header__search"
              theme={this.searchTheme}
              styles={this.customStyles}
              placeholder="..."
              options={this.options}
              value={jemarRole}
              onChange={this.handleRoleChange}
            />
          }
          .
        </div>
      </header>
    );
  }
}

export default HomeHeader;
