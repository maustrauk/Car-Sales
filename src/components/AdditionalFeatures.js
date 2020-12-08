import React from 'react';
import {connect} from  'react-redux';
import AdditionalFeature from './AdditionalFeature';
import {addFeature, addFeaturePrice} from './../actions/totalActions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} addFeaturePrice={props.addFeaturePrice}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {

  return {
    additionalFeatures: state.total.additionalFeatures
  }
}

export default connect(mapStateToProps, {addFeature, addFeaturePrice})(AdditionalFeatures); 
