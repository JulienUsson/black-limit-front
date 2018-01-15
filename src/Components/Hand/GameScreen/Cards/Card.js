import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const Container = glamorous.div(
  {
    position: 'absolute',
    bottom: 5,
    background: '#fff',
    color: '#000',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    fontSize: '2vw',
    fontWeight: 600,
    width: '16vw',
    height: '24vw',
    padding: 12,
    cursor: 'pointer',
    wordWrap: 'break-word',
    transition: 'transform 350ms ease',
  },
  ({ selected }) => ({
    transform: selected && 'translateY(-5vw)',
  })
)

const propTypes = {
  children: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  selected: PropTypes.bool,
}

const defaultProps = {
  onSelect: () => {},
  onDeselect: () => {},
  selected: false,
}

const Card = ({ children, selected, onSelect, onDeselect, ...style }) => (
  <Container
    selected={selected}
    onClick={() => (selected ? onDeselect(children) : onSelect(children))}
    style={style}
  >
    {children}
  </Container>
)

Card.propTypes = propTypes
Card.defaultProps = defaultProps

export default Card
