// Controller view which manages the top level immutable state for the app

const React = require('react')
const Immutable = require('immutable')
const AppStore = require('../stores/appStore')
const Main = require('./main')

class App extends React.Component {
  constructor () {
    super()
    this.state = AppStore.getAppState()
  }

  render () {
    return <div><Main someObj={AppStore.getSomeObj()}/></div>
  }

  componentDidMount () {
    AppStore.addChangeListener(this.onChange.bind(this))
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this.onChange.bind(this))
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !Immutable.is(nextState.immutableData, this.state.immutableData)
  }

  onChange () {
    this.setState({
      immutableData: AppStore.getAppState()
    })
  }
}

module.exports = App
