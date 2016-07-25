// Controller view which manages the top level immutable state for the app

const React = require('react')
const Immutable = require('immutable')
const appStore = require('../stores/appStore')
const Main = require('./main')

class App extends React.Component {
  constructor () {
    super()
    this.state = appStore.getAppState()
  }

  render () {
    return <div><Main someObj={appStore.getSomeObj()} /></div>
  }

  componentDidMount () {
    appStore.addChangeListener(this.onChange.bind(this))
  }

  componentWillUnmount () {
    appStore.removeChangeListener(this.onChange.bind(this))
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !Immutable.is(nextState.immutableData, this.state.immutableData)
  }

  onChange () {
    this.setState({
      immutableData: appStore.getAppState()
    })
  }
}

module.exports = App
