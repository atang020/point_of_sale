import React, { Component } from 'react';
import _ from 'lodash';

import Navigation from 'components/Navigation/Navigation';

import CartSummary from 'pages/CartPage/components/CartSummary/CartSummary';

import ALaCarteSection from './sections/ALaCarteSection';

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
    console.log("CHECKING OUT!", cartItems)
  }

  renderCartSection(cartSection) {
    switch(cartSection) {
      case 'app':
        return (<div>App</div>)
      case 'soup':
        return (<div>Soup</div>)
      case 'combo':
        return (<div>Combo</div>)
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
