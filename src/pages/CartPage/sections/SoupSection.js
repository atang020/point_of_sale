import React, { Component } from 'react';
import _ from 'lodash';

import ItemTile from 'components/ItemTile/ItemTile';

import { getSoups } from 'services/CartService';

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

class SoupSection extends Component {

  state = {
    items: [],
  }

  componentDidMount() {
    this.getMenuItems();
    this.setState({ items: mockItems });
  }

  async getMenuItems() {
    try {
      const res = await getSoups()
      const menu = _.get(res, 'data');

      this.setState({ items: menu });
    } catch (error) {
      console.log("ERROR ", error);
    }
  }

  render() {
    const { cartItems, handleAddCartItem } = this.props;
    const { items } = this.state;

    return (
      <div className={styles.container}>
        <h2>Soup Items</h2>
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

export default SoupSection;
