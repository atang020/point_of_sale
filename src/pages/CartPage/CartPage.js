import React, { Component } from 'react';
import _ from 'lodash';

import Navigation from 'components/Navigation/Navigation';

import CartSummary from 'pages/CartPage/components/CartSummary/CartSummary';
import SimpleModal from 'components/SimpleModal/SimpleModal';
import SimpleButton from 'components/SimpleButton/SimpleButton';

import ALaCarteSection from './sections/ALaCarteSection';
import AppetizerSection from './sections/AppetizerSection';
import SoupSection from './sections/SoupSection';
import ComboSection from './sections/ComboSection';

import { createOrder } from 'services/CartService';

import styles from './CartPage.module.scss';

const routes = [
  {
    url: '/cart/app',
    label: 'Appetizers'
  },
  {
    url: '/cart/soup',
    label: 'Soups'
  },
  {
    url: '/cart/combo',
    label: 'Combos'
  },
  {
    url: '/cart/alacarte',
    label: 'A La Carte'
  },
  {
    url: '/cart/drink',
    label: 'Drinks'
  },
  {
    url: '/cart/pack',
    label: 'Packs'
  }
]

class CartPage extends Component {

  state = {
    cartItems: [],
    successfulOrder: false
  }

  handleAddCartItem = (item) => {
    let { cartItems } = this.state;
    cartItems.push(item);
    this.setState({ cartItems });
  }

  handleRemoveItem = (item, index) => {
    let { cartItems } = this.state;
    cartItems.splice(index, 1);
    this.setState({ cartItems });
  }

  handleCheckout = () => {
    const { cartItems } = this.state;
    const subTotal = parseFloat(_.sumBy(cartItems, (cartItem) => cartItem.price)).toFixed(2);
    const tax = parseFloat((0.0925*subTotal)).toFixed(2);
    const cartTotal = parseFloat(subTotal + tax).toFixed(2);

    const orderObj = {
      customerName: 'Testing 1',
      orderItems: cartItems,
      subTotal,
      tax,
      cartTotal,
    }

    console.log("ORDER OBJ ", orderObj)

    createOrder(orderObj).then((result) => {
      console.log("RESULT ", result)
      const status = _.get(result, 'status');

      if (status === 200) {
        this.setState({ successfulOrder: true })
      }
    }).catch((error) => {
      console.log("ERROR ", error)
    });
  }

  renderCartSection(cartSection) {
    switch(cartSection) {
      case 'app':
        return (
          <AppetizerSection
            handleAddCartItem={this.handleAddCartItem}
          />
        )
      case 'soup':
        return (
          <SoupSection
            handleAddCartItem={this.handleAddCartItem}
          />
        )
      case 'combo':
        return (
          <ComboSection
            handleAddCartItem={this.handleAddCartItem}
          />
        )
      case 'alacarte':
        return (
          <ALaCarteSection
            handleAddCartItem={this.handleAddCartItem}
          />
        )
      case 'drink':
        return (<div>Drink</div>)
      case 'pack':
        return (<div>Pack</div>)
      default:
        return (<div>Error</div>)
    }
  }

  renderModal() {
    const { successfulOrder } = this.state;
    return (
      <SimpleModal
        open={successfulOrder}
        handleClose={() => { this.setState({ successfulOrder: false, cartItems: [] })}}
      >
        <div className={styles.modalContainer}>
          <div className={styles.closeIcon} onClick={this.closeModal}>Close</div>
          <div className={styles.textSection}>
            <div className={styles.title}>Order has been placed!</div>
            <div className={styles.subtitle}>Thank you!</div>
          </div>
          <div className={styles.buttonSection}>
            <SimpleButton
              color='primary'
              size='large'
              value='Close'
              onClick={() => {
                this.setState({ successfulOrder: false, cartItems: [] });
              }}
            />
          </div>
        </div>
      </SimpleModal>
    )
  }

  render() {
    const { match, history } = this.props;
    const { cartItems } = this.state;
    const cartSection = _.get(match, 'params.cartSection');

    const cartSectionContent = this.renderCartSection(cartSection);
    return (
      <div className="App">
        <Navigation
          routes={routes}
          history={history}
        />
        <div className={styles.container}>
          {this.renderModal()}
          <div className={styles.sectionContainer}>
            {cartSectionContent}
          </div>
          <div className={styles.cartSummaryContainer}>
            <CartSummary
              cartItems={cartItems}
              handleCheckout={this.handleCheckout}
              handleRemoveItem={this.handleRemoveItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
