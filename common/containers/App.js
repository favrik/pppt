import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ObjectiveList from '../components/ObjectiveList'
import AddObjective from '../components/AddObjective'
import ObjectiveTimeline from '../components/ObjectiveTimeline'
import * as PtoolActions from '../actions/ptool'

class App extends Component {
  render() {
    const { categories, objectives } = this.props.ptool

    return (
      <div className="">
        <AddObjective lifeAreas={categories} />
        <ObjectiveTimeline items={objectives} />
        <ObjectiveList items={objectives} />
      </div>
    )
  }
}

App.propTypes = {
  ptool: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    ptool: state.ptool
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PtoolActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
