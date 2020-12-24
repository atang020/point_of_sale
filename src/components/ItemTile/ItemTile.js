import React, { Component } from 'react';
import _ from 'lodash';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { styled } from '@material-ui/core/styles';

import SimpleModal from 'components/SimpleModal/SimpleModal';
import SimpleButton from 'components/SimpleButton/SimpleButton';

import { colorPrimary, colorOffWhite } from 'styles/js/vars';

import styles from './ItemTile.module.scss';

class ItemTile extends Component {

  state = {
    showModal: false,
  }

  showModal = () => {
    const { item } = this.props;
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });

  }

  renderModal() {
    const { item, handleAddCartItem } = this.props;
    const { showModal } = this.state;

    const imageUrl = _.get(item, 'imageUrl');
    const itemName = _.get(item, 'name');
    const itemDescription = _.get(item, 'description');

    return (
      <SimpleModal
        open={showModal}
        handleClose={this.closeModal}
      >
        <div className={styles.modalContainer}>
          <div className={styles.closeIcon} onClick={this.closeModal}>Close</div>
          <img src={imageUrl} className={styles.image}/>
          <div className={styles.textSection}>
            <div className={styles.title}>{itemName}</div>
            <div className={styles.subtitle}>{itemDescription}</div>
          </div>
          <div className={styles.buttonSection}>
            <SimpleButton
              color='primary'
              size='large'
              value='Add to cart'
              onClick={() => {
                handleAddCartItem(item);
                this.closeModal()
              }}
            />
          </div>
        </div>
      </SimpleModal>
    )
  }

  render() {
    const { routes, history, item } = this.props;
    const { showModal } = this.state;

    const imageUrl = _.get(item, 'imageUrl');
    const itemName = _.get(item, 'name');
    const itemDescription = _.get(item, 'description');

    return (
      <div className={styles.container}>
        {showModal && this.renderModal()}
        <img src={imageUrl} className={styles.image}/>
        <div className={styles.textSection}>
          <div className={styles.title}>{itemName}</div>
          <div className={styles.subtitle}>{itemDescription}</div>
        </div>
        <div className={styles.addSection} onClick={this.showModal}>Add</div>
      </div>
    );
  }
}

export default ItemTile;
