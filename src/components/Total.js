import React from 'react';
import {connect} from  'react-redux';

const Total = props => {

  console.log(props.check);

  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {

  return {
    price: state.total.car.price,
    additionalPrice: state.total.additionalPrice,
    check: state
  }
}

export default connect(mapStateToProps)(Total); 
