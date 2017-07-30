import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Helmet } from 'react-helmet'
import styles from './index.less'

const App = ({ children, dispatch, app, loading }) => {
  return (
    <div>
      <Helmet>
        <title>Site</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <div className={styles.app}>
        {children}
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object
}

export default connect(({ app, loading }) => ({ app, loading }))(App)
