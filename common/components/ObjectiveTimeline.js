import React, { PropTypes, Component } from 'react'
import moment from 'moment'

export default class ObjectiveTimeline extends Component {
  render() {
    const { items } = this.props

  
    return (
      <div id="timeline">
        
      </div>
    )
  }
}

ObjectiveTimeline.propTypes = {
  items: PropTypes.array.isRequired
}
