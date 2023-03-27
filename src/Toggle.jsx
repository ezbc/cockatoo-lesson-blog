import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: props.initialValue };
    this.onSwitch = props.onSwitch;
    this.switchToggle = this.switchToggle.bind(this);
  }

  switchToggle() {
    this.onSwitch(this.state.toggle);
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return <button onClick={this.switchToggle}>{this.props.children}</button>;
  }
}

export default Toggle;
