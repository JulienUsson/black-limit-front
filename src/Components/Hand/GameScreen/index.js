import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  username: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class Hand extends Component {
  render() {
    const { username, cards } = this.props;
    return (
      <div>
        <div>{username}</div>
        {cards.map(card => <div key={card}>{card}</div>)}
      </div>
    );
  }
}

Hand.propTypes = propTypes;

const mapStateToProps = state => ({
  username: state.hand.username,
  cards: state.hand.hand,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hand);
