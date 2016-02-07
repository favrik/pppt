import expect from 'expect'
import objectives from '../../common/reducers/objectives'
import * as types from '../../common/constants/ActionTypes'

describe('objectives reducer', () => {
  const initialState = {
    entities: {
      categories: {},
      objectives: {}
    },
    objectives: {
      isFetching: false,
      lastUpdated: null,
      items: [],
    },
    categories: {
      isFetching: false,
      lastUpdated: null,
      items: []
    }

  }

  it('should handle initial state', () => {
    expect(
      objectives(undefined, {})
    ).toEqual(initialState)
  })

  /*
  it('should handle ADD_OBJECTIVE_REQUEST', () => {
    expect(
      objectives(initialState, { type: types.ADD_OBJECTIVE_REQUEST, objective: 'retro' })
    ).toEqual(
      [
        {
          id: 0,
          category: 0,
          deadline: '',
          objective: 'retro'
        }
      ]
    )
  })
  */
})
