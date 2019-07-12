import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    const { businessListProp } = this.props;

    return (
      <div className="BusinessList">
        {
          businessListProp.map(business => {
          return <Business businessProp={business}/>
          })
        }
      </div>
    )
  }
}

export default BusinessList;
