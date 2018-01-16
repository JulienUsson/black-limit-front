import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { blankCountSelector } from 'Selectors'
import Card from './Card'

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  blankCount: PropTypes.number.isRequired,
}

class Cards extends Component {
  state = {
    selected: [],
  }

  onChange = card => value => {
    const { selected } = this.state
    const { blankCount } = this.props

    if (value) {
      if (blankCount > selected.length) {
        this.setState({ selected: [...selected, card] })
      }
    } else {
      this.setState({ selected: selected.filter(c => c !== card) })
    }
  }

  render() {
    const { cards } = this.props
    const { selected } = this.state

    return (
      <Fragment>
        {cards.map((card, i) => (
          <Card
            key={card}
            selected={selected.includes(card)}
            onChange={this.onChange(card)}
          >
            {card}
          </Card>
        ))}
      </Fragment>
    )
  }
}

Cards.propTypes = propTypes

const mapStateToProps = state => ({
  cards: state.hand.hand,
  blankCount: blankCountSelector(state),
})

export default connect(mapStateToProps)(Cards)
