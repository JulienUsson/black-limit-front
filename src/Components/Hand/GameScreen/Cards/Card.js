import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Container = glamorous.div({
  cursor: 'pointer',
  background: '#fff',
  borderStyle: 'solid',
  borderColor: '#000',
  borderWidth: 1,
  color: '#000',
  position: 'absolute',
  borderRadius: 15,
  padding: 15,
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
