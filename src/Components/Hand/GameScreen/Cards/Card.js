import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Container = glamorous.div({
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
  '&:hover': {
    transform: 'translateY(-5vw)',
  },
});

const propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {},
};

const Card = ({ children, onClick, ...style }) => (
  <Container onClick={onClick} style={style}>{children}</Container>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
