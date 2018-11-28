import React from 'react';
import Select from 'react-select';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jemarRole: '',
    };
  }

  handleRoleChange = value => {
    this.setState({ jemarRole: value });
  };

  searchTheme = theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      // primary: 'rgba(#555b6e, 0.2)',
      primary: '#f4faff',
      neutral0: '#555b6e',
      neutral20: '#f4faff',
      neutral80: '#f4faff',
      primary25: '#000',
    },
  });

  render() {
    const { jemarRole } = this.state;
    return (
      <header className="home__header">
        <div className="container">
          Jemar is a
          {
            <Select
              className="input home__header__search"
              classNamePrefix="home__header__search"
              theme={this.searchTheme}
              placeholder="developer"
              options={[
                { value: 'fullstack', label: 'Full Stack Developer' },
                { value: 'engineer', label: 'Engineer' },
                { value: 'entrepreneur', label: 'Entrepreneur' },
              ]}
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

{
  /* <input
              className="input home__header__search"
              type="search"
              placeholder="jack of all trades"
              value={jemarRole}
              onChange={this.handleRoleChange}
            /> */
}

export default HomeHeader;
