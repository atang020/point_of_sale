import React, { Component } from 'react';
import _ from 'lodash';

import SimpleButton from 'components/SimpleButton/SimpleButton';
import SimpleModal from 'components/SimpleModal/SimpleModal';

import styles from './CartSummary.module.scss';

const buttonStyle = {
  height: '100px',
}
class CartSummary extends Component {

  state = {
    showRemoveModal: false,
  }

  calcSubTotal(cartItems) {
    return cartItems.reduce((sum, { price }) => sum + price, 0);
  }

  openRemoveModal = () => {
    this.setState({ showRemoveModal: true });
  }

  closeRemoveModal = () => {
    this.setState({ showRemoveModal: false });
  }

  handleRemoveCartItem = (index) => {
    const { handleRemoveItem } = this.props;
    handleRemoveItem(index);
    this.closeRemoveModal();
  }

  renderRemoveModal() {
    const { index, showRemoveModal } = this.state;
    return (
      <SimpleModal
        open={showRemoveModal}
        handleClose={this.closeModal}
      >
        <div className={styles.modalContainer}>
          <div className={styles.closeIcon} onClick={this.closeModal}>Close</div>
          <div className={styles.textSection}>
            <div className={styles.title}>Are you sure you want to remove?</div>
          </div>
          <div className={styles.buttonSection}>
            <SimpleButton
              color='primary'
              size='large'
              value='Remove from cart'
              onClick={() => {
                this.handleRemoveCartItem(index)
              }}
            />

            <SimpleButton
              color='secondary'
              size='large'
              value='Cancel'
              onClick={() => {
                this.closeRemoveModal()
              }}
            />
          </div>
        </div>
      </SimpleModal>
    )
  }

  render() {
    const { cartItems, handleCheckout } = this.props;

    const { showRemoveModal } = this.state;

    let subTotal = this.calcSubTotal(cartItems).toFixed(2);

    return (
      <div className={styles.container}>
        {this.renderRemoveModal()}
        <div className={styles.contentContainer}>
          <div className={styles.title}>Cart Summary</div>
          <div className={styles.cartItemsSection}>
            {_.map(cartItems, (cartItem, index) => {
              return (
                <div className={styles.cartItem}>
                  <div onClick={this.openRemoveModal}> (-) </div>
                  <div className={styles.cartItemDescription}>
                    <div>{cartItem.name}</div>
                  </div>
                  <div>{cartItem.price}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.buttonSection}>
          <div className={styles.subTotalSection}>
            <div>Subtotal: </div>
            <div>${subTotal}</div>
          </div>
          <SimpleButton
            color='primary'
            size='large'
            value='Checkout'
            onClick={handleCheckout}
            style={buttonStyle}
          />
        </div>
      </div>
    );
  }
}

export default CartSummary;
