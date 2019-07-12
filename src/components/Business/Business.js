import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    const { name, address, city, state, zipCode, category, rating, reviewCount} = this.props.businessProp;

    return (
      <div class="Business">
        <div className="image-container">
          <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
        </div>
        <h2>{name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{address}</p>
            <p>{city}</p>
            <p>{state} {zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{category}</h3>
            <h3 className="rating">{rating} stars</h3>
            <p>{reviewCount} reviews</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Business;
