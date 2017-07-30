import { User } from '../services'
const { getUser, addToUsers } = User

export default {
  namespace: 'user',
  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'query' })
    }
  },
  state: {
    userList: []
  },
  effects: {
    * query ({ payload }, { call, put }) {
      const { data } = yield call(getUser, payload)
      if (data.success) {
        yield put({ type: 'querySuccess', data })
      } else {
        yield put({ type: 'queryFail', data })
      }
    },
    * post ({ payload }, { call, put }) {
      const { data } = yield call(addToUsers, payload)
      if (data.success) {
        console.log('添加成功')
        yield put({ type: 'query' })
      } else {
        console.log(data.error)
      }
    }
  },
  reducers: {
    querySuccess (state, { data }) {
      const { userList } = data
      return {
        ...state,
        userList
      }
    },
    queryFail (state, { data }) {
      return {
        ...state
      }
    }
  }
}
