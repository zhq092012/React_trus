import React, { Component } from 'react'
import { connect } from 'react-redux'
@connect(state => ({ count: state.getIn(['counter', 'count']) }))
class CounterDisplay extends Component {
  render() {
    console.log(this.props)

    return <div>{this.props.count}</div>
  }
}
export default CounterDisplay
