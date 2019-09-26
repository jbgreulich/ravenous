import React, { Component } from 'react';

import Business from '../Business/Business';

import './BusinessList.css';

export default class BusinessList extends Component {
  render() {
    const { businessListProp } = this.props;

    return (
      <div className="BusinessList">
        {
          businessListProp.map(business => {
            return <Business key={business.id} businessProp={business}/>
          })
        }
      </div>
    )
  }
}
