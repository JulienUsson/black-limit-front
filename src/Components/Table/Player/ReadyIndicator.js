import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const Indicator = glamorous.div(({ ready }) => ({
  backgroundColor: ready ? '#76FF03' : '#F44336',
  borderRadius: '50%',
  height: 12,
  width: 12,
  marginRight: 8,
}))

const propTypes = {
  isReady: PropTypes.bool.isRequired,
}

const ReadyIndicator = ({ isReady }) => <Indicator ready={isReady} />

ReadyIndicator.propTypes = propTypes

export default ReadyIndicator
