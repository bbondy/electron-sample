const React = require('react')
const ImmutableComponent = require('./immutableComponent')
const appActions = require('../actions/appActions')

class Main extends ImmutableComponent {
  onDecrement () {
    appActions.decrement()
  }

  onIncrement () {
    appActions.increment()
  }

  render () {
    const count = this.props.someObj.get('counter')
    return <div>
      <div>
        <a onClick={this.onDecrement.bind(this)}>Decrement</a> <a onClick={this.onIncrement.bind(this)}>Increment</a>
      </div>
      <div>{count}</div>
    </div>
  }
}

module.exports = Main
