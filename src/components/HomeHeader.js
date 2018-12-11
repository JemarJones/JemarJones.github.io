import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import projects from '../data/projects';

class HomeHeader extends React.PureComponent {
  static propTypes = {
    onSkillChange: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.options = this.getOptions(projects);
    this.state = {
      jemarSkill: this.options[0],
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

  handleSkillChange = value => {
    const { onSkillChange } = this.props;
    this.setState({ jemarSkill: value });
    onSkillChange && onSkillChange(value);
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
        fontSize: '3rem',
      }),
    };
  }

  render() {
    const { jemarSkill } = this.state;
    return (
      <header className="home__header">
        <div className="container">
          <span className="home__header__name">Jemar knows</span>
          <div className="home__header__search__control-container">
            <Select
              placeholder="..."
              options={this.options}
              value={jemarSkill}
              onChange={this.handleSkillChange}
              className="input home__header__search"
              classNamePrefix="home__header__search"
              theme={this.searchTheme}
              styles={this.customStyles}
            />
            <span>.</span>
          </div>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
