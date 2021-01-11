import React, { Component } from 'react';
import _ from 'lodash';

import ItemTile from 'components/ItemTile/ItemTile';

import { getMenu } from 'services/CartService';

import styles from './ALaCarteSection.module.scss';

class ALaCarteSection extends Component {

  state = {
    items: [],
  }

  componentDidMount() {
    this.getMenuItems();
  }

  async getMenuItems() {
    try {
      const res = await getMenu()
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
