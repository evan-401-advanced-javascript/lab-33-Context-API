import React from 'react'

export const SettingsContext = React.createContext();

export default class SettingsProvider extends React.component {
  constructor() {
    super();
    this.state ={
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    }
  }
  increment() {
    this.setState(previousState => ({
      previousState + 1
    }));
  }
  decrement() {
    return this.setState.count--;
  }


  render() {
    return (
      <SettingsContext.provider value = {this.state}>
        {this.props.children};
      </SettingsContext.provider>
    )
  }
}

