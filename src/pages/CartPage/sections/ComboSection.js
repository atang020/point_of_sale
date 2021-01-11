import React, { Component } from 'react';
import _ from 'lodash';

import ItemTile from 'components/ItemTile/ItemTile';

import { getAppetizers } from 'services/CartService';

import styles from './ComboSection.module.scss';
import ComboStart from './ComboStart';
import ComboSides from './ComboSides';
import ComboEntrees from './ComboEntrees';
import ComboReview from './ComboReview';


class ComboSection extends Component {

  state = {
    entreeCount: 0,
    sideCount: 0,
    index: 0,
    sides: [],
    entrees: [],
  }

  componentDidMount() {

  }

  handleNextStage = () => {
    const { index } = this.state;

    this.setState({ index: index+1 });
  }

  handlePrevStage = () => {
    const { index } = this.state;

    this.setState({ index: index-1 });
  }

  handleComboPackageSelection = (index) => {
    switch(index) {
      case 0:
        this.setState({ entreeCount: 1, sideCount: 1 });
        break;
      case 1:
        this.setState({ entreeCount: 1, sideCount: 2 });
        break;
      case 2:
        this.setState({ entreeCount: 2, sideCount: 2 });
        break;
      case 3:
        this.setState({ entreeCount: 3, sideCount: 2 });
        break;
      default:
        throw new Error("Invalid Selection");
    }

    this.handleNextStage();
  }

  renderStage = () => {
    const { index, entreeCount, sideCount, entrees, sides } = this.state;

    switch (index) {
      case 0:
        return (
          <ComboStart
            handleComboPackageSelection={this.handleComboPackageSelection}
          />
        );
      case 1:
        return (
          <ComboSides
            count={sideCount}
            sides={sides}
            handlePrevStage={this.handlePrevStage}
            handleNextStage={this.handleNextStage}
          />
        );
      case 2:
        return (
          <ComboEntrees
            count={entreeCount}
            entrees={entrees}
            handlePrevStage={this.handlePrevStage}
            handleNextStage={this.handleNextStage}
          />
        );
      case 3:
        return (
          <ComboReview
            handlePrevStage={this.handlePrevStage}
            handleNextStage={this.handleNextStage}
          />
        )
      default:
        return (
          <ComboStart
            handleComboPackageSelection={this.handleComboPackageSelection}
          />
        );
      }
  }

  render() {
    const { cartItems, handleAddCartItem } = this.props;
    const { items } = this.state;

    const content = this.renderStage();

    return (
      <div className={styles.container}>
        <h2>Combo</h2>
        <div className={styles.section}>
          {content}
        </div>
      </div>
    );
  }
}

export default ComboSection;
