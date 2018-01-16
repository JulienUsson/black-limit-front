import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import Cards from './Cards'

const Container = glamorous.div({
  height: '100%',
})

const Title = glamorous.h2({
  textAlign: 'center',
  fontWeight: 700,
  fontSize: 48,
  margin: '15px 0',
})

const propTypes = {
  username: PropTypes.string.isRequired,
}

const Hand = ({ username }) => (
  <Container>
    <Title>{username}</Title>
    <Cards />
  </Container>
)

Hand.propTypes = propTypes

const mapStateToProps = state => ({
  username: state.hand.username,
})

export default connect(mapStateToProps)(Hand)
