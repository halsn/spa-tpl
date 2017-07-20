import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from './routes/app'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        System.import('./routes/user')
          .then(module => {
            console.log(module)
          })
        NProgress.start()
        require.ensure([], require => {
          registerModel(app, require('./models/user.js'))
          NProgress.done()
          cb(null, { component: require('./routes/user') })
        }, 'user')
      },
      childRoutes: [
        {
          path: 'user',
          getComponent (nextState, cb) {
            NProgress.start()
            require.ensure([], require => {
              registerModel(app, require('./models/user.js'))
              NProgress.done()
              cb(null, require('./routes/user'))
            }, 'user')
          }
        }, {
          path: '*',
          getComponent (nextState, cb) {
            NProgress.start()
            require.ensure([], require => {
              NProgress.done()
              cb(null, require('./routes/error'))
            }, 'error')
          }
        }
      ]
    }
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}

export default Routers
