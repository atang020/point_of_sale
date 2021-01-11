import React, { Component } from 'react';
import _ from 'lodash';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { styled } from '@material-ui/core/styles';

import SimpleModal from 'components/SimpleModal/SimpleModal';
import SimpleButton from 'components/SimpleButton/SimpleButton';

import { colorPrimary, colorOffWhite } from 'styles/js/vars';

import styles from './BasicItemTile.module.scss';

class BasicItemTile extends Component {

  state = {
    selected: false,
  }

  toggleSelected = () => {
    const { handleAdd, handleRemove, item, disableAdd } = this.props;
    const { selected } = this.state;

    if (!selected && disableAdd) {
      return;
    }

    this.setState({ selected: !selected }, () => {
      if(this.state.selected) {
        handleAdd(item);
      } else {
        handleRemove(item);
      }
    })
  }

  render() {
    const { routes, history, item, disableAdd, hideAddRemove } = this.props;
    const { selected } = this.state;

    const itemName = _.get(item, 'name');
    const itemDescription = _.get(item, 'description');

    return (
      <section>
        <div>
          {itemName}
        </div>
        <div>
          {itemDescription}
        </div>
        {!hideAddRemove && <div
          className={`${disableAdd && !selected ? styles.disabled : styles.addSection}`}
          onClick={this.toggleSelected}>
            {selected ? 'Remove': 'Add'}
        </div>}
      </section>
    );
  }
}

export default BasicItemTile;
