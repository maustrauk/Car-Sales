import React from 'react';

const AddedFeature = props => {


  const onClick = () => {
    props.removeFeature(props.feature.id);
    props.addFeaturePrice();
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={onClick}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
