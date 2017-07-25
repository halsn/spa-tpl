import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button } from '../../components'
import { Helmet } from 'react-helmet'
import './index.less'

const App = ({ children, dispatch, app, loading }) => {
  return (
    <div>
      <Helmet>
        <title>Site</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <Button loading={loading.global} title='Click me' />
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
