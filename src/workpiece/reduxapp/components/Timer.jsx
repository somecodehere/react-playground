import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clock extends Component {

  componentDidMount() {
    this.timer = setInterval(this.tick, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {

    this.props.dispatch({ type: "TICK" });

  }

  render() {

    const { timer } = this.props;

    return (
      <div className="Timer">
        <b>Timer: {timer}</b>
      </div>
    );

  }

}

export function mapStateToProps(state) {

  return {
    'timer': state.main.timer
  };

}

export function mapDispatchToProps(dispatch) {

  return {
    dispatch
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
