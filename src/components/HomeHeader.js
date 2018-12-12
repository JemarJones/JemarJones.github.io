import React from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';

import Select from './Select';

import { SKILL_UNSELECTED } from '../utils/constants';

class HomeHeader extends React.PureComponent {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    onSkillChange: PropTypes.func.isRequired,
    selectedSkill: PropTypes.object,
  };

  getOptions = memoize(projects => {
    // TODO: #16 - Maybe sort this by most occurrences in projects?
    return (
      projects
        // Get the list of skills from each project
        .map(p => p.skills)
        // Combine and dedupe the lists
        .reduce(
          (acc, curr) => {
            return [...new Set([...acc, ...curr.map(skill => skill.name)])];
          },
          [SKILL_UNSELECTED],
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
              placeholder={SKILL_UNSELECTED}
            />
            <span>.</span>
          </div>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
