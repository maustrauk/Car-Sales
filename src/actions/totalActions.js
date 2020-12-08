export const ADD_FEATURE = "ADD_FEATURE";
export const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";

export const addFeature = newFeature => {
    return { type: ADD_FEATURE, payload: newFeature};
}

export const addFeaturePrice = () => {
    return { type: ADD_FEATURE_PRICE };
}