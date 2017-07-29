import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
<<<<<<< HEAD:src/client/routes/app/index.js
import { Button } from '../../components'
import { Helmet } from 'react-helmet'
import './index.less'
=======
import { Helmet } from 'react-helmet'
import styles from './index.less'
>>>>>>> e8c3cc888a12e101c258eab989ce5eaf020c61c8:src/client/routes/app/index.js

const App = ({ children, dispatch, app, loading }) => {
  return (
    <div>
      <Helmet>
        <title>Site</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <div className={styles.main}>{children}</div>
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
