import React from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';

import Select from './Select';

class HomeHeader extends React.PureComponent {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    onSkillChange: PropTypes.func.isRequired,
    selectedSkill: PropTypes.object,
  };

  getOptions = memoize(projects => {
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
  });

  handleSkillChange = value => {
    this.setState({ jemarSkill: value });
    this.props.onSkillChange(value);
  };

  render() {
    const { projects, selectedSkill } = this.props;
    const options = this.getOptions(projects);

    return (
      <header className="home__header">
        <div className="container">
          <span className="home__header__name">Jemar knows</span>
          <div className="home__header__search__control-container">
            <Select
              options={options}
              value={selectedSkill || options[0]}
              onChange={this.handleSkillChange}
              placeholder="some things"
            />
            <span>.</span>
          </div>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
