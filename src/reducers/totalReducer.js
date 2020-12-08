export const initState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const totalReducer = (state = initState, action) => {
    switch (action.type) {
      case "ADD_FEATURE":
        console.log("add feature");
        const newFeatures = filterFunc(state.car.features, action.payload);
        return  {
          ...state,
          car: {
            ...state.car,
            features: newFeatures
          }};

      case "ADD_FEATURE_PRICE":
        let newPrice = 0;
        state.car.features.forEach(feature => {
          newPrice = newPrice + feature.price;
        });
        console.log("add feature price = ", newPrice);

        return {
          ...state,
          additionalPrice: newPrice
        };
      default:
        return state;
    }
  };


const filterFunc = (oldState, addToState) => {
  if (!oldState.length) {
    return [addToState];
  } else {
    const filteredArray = oldState.filter(feature => feature.id !== addToState.id);
    return filteredArray.concat(addToState);

  }
}

