import React, { Component } from 'react';
import _ from 'lodash';

import BasicItemTile from 'components/BasicItemTile/BasicItemTile';

import { getAppetizers } from 'services/CartService';

import styles from './ComboSection.module.scss';

class ComboReview extends Component {

  state = {
    sides: [],
    entrees: [],
    state: 0,
    inCart: [],
  }

  render() {
    const { sides, entrees, handleAddToCart, count } = this.props;

    return (
      <div className={styles.container}>
        <h2>Select {count} Entrees</h2>
        <div className={styles.section}>
        {_.map(sides, (side) => {
          return (
            <BasicItemTile
              item={side}
              hideAddRemove
            />
          )
        })}
        {_.map(entrees, (side) => {
          return (
            <BasicItemTile
              item={side}
              hideAddRemove
            />
          )
        })}
        <div onClick={() => handleAddToCart()}>Continue</div>
        </div>
      </div>
    );
  }
}

export default ComboReview;
