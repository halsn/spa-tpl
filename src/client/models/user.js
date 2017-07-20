import { User } from '../services'

const { getUser } = User

export default {
  namespace: 'user',
  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'query' })
    }
  },
  state: {
    name: '',
    list: []
  },
  effects: {
    * query ({ payload }, { call, put }) {
      const { data } = yield call(getUser, payload)
      if (data.success) {
        yield put({ type: 'querySuccess', data })
      } else {
        yield put({ type: 'queryFail', data })
      }
    }
  },
  reducers: {
    querySuccess (state, { data }) {
      const { name, list } = data
      return {
        ...state,
        name,
        list
      }
    },
    queryFail (state, { data }) {
      console.log('fail to get data')
      return {
        ...state
      }
    }
  }
}
