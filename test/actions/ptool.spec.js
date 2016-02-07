import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import * as types from '../../common/constants/ActionTypes'
import * as actions from '../../common/actions/ptool'
import * as urlmap from '../../common/constants/urls'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

function urlgen(url) {
  let fullPath = urlmap[url]()
  return fullPath.replace(urlmap.API_SERVER, '')
}

function nocker(method, path, code, response = {}) {
  nock(urlmap.API_SERVER)[method](path).reply(code, response)
}

describe('pppt actions', () => {

  it('addObjectiveRequest should create ADD_OBJECTIVE_REQUEST action', () => {
    expect(actions.addObjectiveRequest()).toEqual({ type: types.ADD_OBJECTIVE_REQUEST })
  })

  describe('ADD_OBJECTIVE thunk', () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it('creates ADD_OBJECTIVE_SUCCESS when an objective has been added', (done) => {
      nocker('post', urlgen('addObjective'), 200, { body: { id: 1, objective: 'Dummy' } })

      const expectedActions = [
        { type: types.ADD_OBJECTIVE_REQUEST },
        { type: types.ADD_OBJECTIVE_SUCCESS, objective: { id: 1, objective: 'Dummy' } }
      ]
      const store = mockStore({ ptool: [] }, expectedActions, done)
      store.dispatch(actions.addObjective({objective: 'Dummy'}))
    })

    it('creates ADD_OBJECTIVE_FAILURE when adding an objective fails', (done) => {
      nocker('post', urlgen('addObjective'), 500)

      const expectedActions = [
        { type: types.ADD_OBJECTIVE_REQUEST },
        { type: types.ADD_OBJECTIVE_FAILURE, error: 'Internal Server Error' }
      ]
      const store = mockStore({ ptool: [] }, expectedActions, done)
      store.dispatch(actions.addObjective({objective: 'Dummy'}))
    })
  })
})

