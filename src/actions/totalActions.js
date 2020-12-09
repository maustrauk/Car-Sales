export const ADD_FEATURE = "ADD_FEATURE";
export const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = newFeature => {
    return { type: ADD_FEATURE, payload: newFeature};
}

export const addFeaturePrice = () => {
    return { type: ADD_FEATURE_PRICE };
}

export const removeFeature = featureID => {
    return { type: REMOVE_FEATURE, payload: featureID};
}