import React, { PropTypes, Component } from 'react'

export default class ObjectiveList extends Component {
  render() {

    return (
      <ul>
        {this.props.items.map((objective, index) =>
          <li key={index}>{objective.objective}</li>
        )}
      </ul>
    )
  }
}

ObjectiveList.propTypes = {
  items: PropTypes.array.isRequired
}
