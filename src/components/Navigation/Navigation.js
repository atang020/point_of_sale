import React, { Component } from 'react';
import _ from 'lodash';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { styled } from '@material-ui/core/styles';

import { colorPrimary, colorOffWhite } from 'styles/js/vars';

import styles from './Navigation.scss';

const NavigationContainer = styled(BottomNavigation)({
  backgroundColor: colorPrimary,
  justifyContent: 'space-between',
});

const NavigationItem = styled(BottomNavigationAction)({
  color: colorOffWhite,
})

class Navigation extends Component {

  render() {
    const { routes, history } = this.props;
    return (

      <NavigationContainer
        value={''}
        onChange={(event, newValue) => {
          history.push(newValue)
        }}
        showLabels
      >
        {
          _.map(routes, (route) => {
            return (
              <NavigationItem label={route.label} value={route.url}/>
            )
          })
        }
      </NavigationContainer>
    );
  }
}

export default Navigation;
