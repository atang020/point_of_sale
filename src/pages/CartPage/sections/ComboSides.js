import React, { Component } from 'react';
import _ from 'lodash';

import BasicItemTile from 'components/BasicItemTile/BasicItemTile';

import { getAppetizers } from 'services/CartService';

import styles from './ComboSection.module.scss';

class ComboSides extends Component {

  state = {
    items: [],
    state: 0,
  }

  componentDidMount() {
    
  }

  render() {
    const { cartItems, handleAddToCombo, count } = this.props;
    const { items } = this.state;


    return (
      <div className={styles.container}>
        <h2>Select {count} Sides</h2>
        <div className={styles.section}>
        {_.map(items, (item) => {
          return (
            <BasicItemTile
              item={item}
              handleAddToCombo={handleAddToCombo}
            />
          )
        })}
        </div>
      </div>
    );
  }
}

export default ComboSides;
