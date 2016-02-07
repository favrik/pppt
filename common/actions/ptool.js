import fetch from 'isomorphic-fetch';
import * as types from '../../common/constants/ActionTypes'
import * as urlmap from '../../common/constants/urls'

export function addObjectiveRequest() {
  return { type: types.ADD_OBJECTIVE_REQUEST }
}

function addObjectiveSuccess(objective) {
  return { type: types.ADD_OBJECTIVE_SUCCESS, objective }
}

function addObjectiveFailure(error) {
  return { type: types.ADD_OBJECTIVE_FAILURE, error }
}

function checkResponseStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = response.statusText
    throw error
  }
}

export function addObjective(objective) {
  return dispatch => {
    dispatch(addObjectiveRequest())

    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(objective)
    }

    return fetch(urlmap.addObjective(), fetchOptions)
      .then(checkResponseStatus)
      .then(res => res.json())
      .then(json => dispatch(addObjectiveSuccess(json.body)))
      .catch(ex => dispatch(addObjectiveFailure(ex)))
  }
}
