import React from 'react';
import PropTypes from 'prop-types';

import projects from '../data/projects';

import Select from './Select';

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

  render() {
    const { jemarSkill } = this.state;
    return (
      <header className="home__header">
        <div className="container">
          <span className="home__header__name">Jemar knows</span>
          <div className="home__header__search__control-container">
            <Select
              options={this.options}
              value={jemarSkill}
              onChange={this.handleSkillChange}
            />
            <span>.</span>
          </div>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
