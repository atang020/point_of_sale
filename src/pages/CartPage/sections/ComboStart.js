import React, { Component } from 'react';
import _ from 'lodash';
import styles from './ComboSection.module.scss';

const options = [
  "Bowl",
  "Combo A",
  "Combo B",
  "Combo C",
]

class ComboStart extends Component {

  state = {
    items: [],
    state: 0,
  }

  componentDidMount() {

  }

  render() {
    const { handleComboPackageSelection } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.section}>
        {_.map(options, (option, index) => {
          return (
            <div className={styles.pointer} onClick={() => handleComboPackageSelection(index)}>
              {option}
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default ComboStart;
