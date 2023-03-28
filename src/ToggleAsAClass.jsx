import React from 'react';
class ToggleAsAClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggle: props.initialValue };

    // this.switchToggle = this.switchToggle.bind(this);
  }

  switchToggle() {
    const newToggle = !this.state.toggle;
    this.setState({ ...this.state, toggle: newToggle });
    this.props.onSwitch(newToggle);
  }

  render() {
    return (
      <button onClick={e => this.switchToggle(e)}>{this.props.children}</button>
    );
  }
}

export default ToggleAsAClass;
