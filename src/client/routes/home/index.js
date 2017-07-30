import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import styles from './index.less'

const Home = ({ dispatch }) => (
  <div className={styles.home}>
    <nav>
      <a onClick={(e) => { e.preventDefault(); dispatch(routerRedux.push('/')) }} href='#'>Home</a>
      <br />
      <a onClick={(e) => { e.preventDefault(); dispatch(routerRedux.push('/user')) }} href='#'>User</a>
      <br />
      <a onClick={(e) => { e.preventDefault(); dispatch(routerRedux.push('/foo')) }} href='#'>Foo</a>
    </nav>
  </div>
)

Home.propTypes = {
  dispatch: PropTypes.func
}

export default connect(({ home }) => ({ home }))(Home)
