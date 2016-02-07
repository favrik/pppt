import React, { PropTypes, Component } from 'react'
import t from 'tcomb-form';

export default class AddObjective extends Component {
  save() {
    let value = this.refs.form.getValue()
    console.log(value)
    if (value) {
      console.log(value)
    }
  }

  render() {
    const Form = t.form.Form
    const lifeAreaOptions = {}


    for (let a of this.props.lifeAreas) {
      lifeAreaOptions[a.name] = a.name
    }

    console.log(lifeAreaOptions)

    const lifeAreas = t.enums(lifeAreaOptions)

    const Objective = t.struct({
      objective: t.String,
      life_area_id: lifeAreas,
      priority: t.Number,
      deadline: t.Date
    })

    return (
      <div>
        <Form ref="form" type={Objective} />
        <button onClick={this.save.bind(this)}>Add</button>
      </div>
    )
  }
}

AddObjective.propTypes = {
  lifeAreas: PropTypes.array.isRequired
}
