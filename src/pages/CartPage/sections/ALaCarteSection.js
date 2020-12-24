import React, { Component } from 'react';
import _ from 'lodash';

import ItemTile from 'components/ItemTile/ItemTile';

import styles from './ALaCarteSection.module.scss';

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

class ALaCarteSection extends Component {

  state = {
    items: [],
  }

  componentDidMount() {
    this.setState({ items: mockItems });
  }

  render() {
    const { cartItems, handleAddCartItem } = this.props;
    const { items } = this.state;

    return (
      <div className={styles.container}>
        <h2>A La Carte Items</h2>
        <div className={styles.section}>
          {_.map(items, (item) => {
            return (
              <ItemTile
                item={item}
                handleAddCartItem={handleAddCartItem}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default ALaCarteSection;