import React from 'react';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jemarRole: '',
    };
  }

  handleRoleChange = event => {
    event.preventDefault();
    this.setState({ jemarRole: event.target.value });
  };

  render() {
    const { jemarRole } = this.state;
    return (
      <header className="home__header">
        <div className="container">
          Jemar is a
          {
            <input
              className="input home__header__search"
              type="search"
              placeholder="jack of all trades"
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
