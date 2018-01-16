import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const Container = glamorous.div()

const propTypes = {
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
}

const Card = ({ children, selected, onChange }) => (
  <Container selected={selected} onClick={() => onChange(!selected)}>
    {children} {selected && 'V'}
  </Container>
)

Card.propTypes = propTypes

export default Card
