import { ADD_OBJECTIVE } from '../constants/ActionTypes'

const initialState = []

export default function objectives(state = initialState, action) {
  switch (action.type) {
    case ADD_OBJECTIVE:

    default:
      return state
  }
}
