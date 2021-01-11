import React, { Component } from 'react';
import _ from 'lodash';

import BasicItemTile from 'components/BasicItemTile/BasicItemTile';

import { getAppetizers } from 'services/CartService';

import styles from './ComboSection.module.scss';
const mockItems = [
  {
    '_id': 1,
    'name': 'Orange Chicken',
    'description': 'Cwispy Egg Rolls',
    'category': 'entree',
    'price': 1.99,
    'available': true,
    'imageUrl': '/images/orange_chicken.jpg'
  },
  {
    '_id': 2,
    'name': 'Crab Wonton',
    'description': 'Cwispy Crab Wonton Cwispy Crab Wonton Cwispy Crab Wonton',
    'category': 'appetizers',
    'price': 2.99,
    'available': true,
    'imageUrl': '/images/crab_wonton.jpg'
  },
  {
    '_id': 3,
    'name': 'Egg Drop Soup',
    'description': 'Egg soup',
    'category': 'soups',
    'price': 1.89,
    'available': true,
    'imageUrl': '/images/egg_drop.jpg'
  }
]
class ComboSides extends Component {

  state = {
    sides: [],
    state: 0,
    inCart: [],
  }

  componentDidMount() {
    this.setState({ sides: mockItems });
  }

  addSide = (side) => {
    const { count } = this.props;
    const { inCart } = this.state;

    inCart.push(side);
    this.setState({ inCart }, () => {
      if (this.state.inCart.length === count) {
        this.setState({ maxedOut: true });
      }
    });
  }

  removeSide = (side) => {
    let { inCart } = this.state;

    const index = _.findIndex(inCart, (item) => { return item.name === side.name });

    inCart.splice(index, 1);

    this.setState({ inCart, maxedOut: false });
  }

  render() {
    const { cartItems, handleAddToCombo, count } = this.props;
    const { sides, maxedOut, inCart } = this.state;

    return (
      <div className={styles.container}>
        <h2>Select {count} Sides</h2>
        <div className={styles.section}>
        {_.map(sides, (side) => {
          return (
            <BasicItemTile
              item={side}
              handleAdd={this.addSide}
              handleRemove={this.removeSide}
              disableAdd={maxedOut}
            />
          )
        })}
        <div onClick={() => handleAddToCombo(inCart)}>Continue</div>
        </div>
      </div>
    );
  }
}

export default ComboSides;
