import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button } from '../../components'
import { Helmet } from 'react-helmet'
import './index.less'

const User = ({ children, dispatch, user, loading }) => {
  console.log('here is user')
  return (
    <div>
      <Helmet>
        <title>Site</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <Button loading={loading.global} title='User is here' />
    </div>
  )
}

User.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func,
  user: PropTypes.object,
  loading: PropTypes.object
}

export default connect(({ user, loading }) => ({ user, loading }))(User)
