import actionTypes from "./actionTypes";

export const addLocation = (payload) => {
    return {
        type: actionTypes.ADD_LOCATION,
        payload,
    };
};

export const addStartDate = (payload) => {
    return {
        type: actionTypes.ADD_START_DATE,
        payload,
    };
};

export const addEndDate = (payload) => {
    return {
        type: actionTypes.ADD_END_DATE,
        payload,
    };
};

export const addAdults = (payload) => {
    return {
        type: actionTypes.ADD_ADULTS,
        payload,
    };
};

export const addChildren = (payload) => {
    return {
        type: actionTypes.ADD_CHILDREN,
        payload,
    };
};

export const addInfants = (payload) => {
    return {
        type: actionTypes.ADD_INFANTS,
        payload,
    };
};

export const addPets = (payload) => {
    return {
        type: actionTypes.ADD_PETS,
        payload,
    };
};

export const addLat = (payload) => {
    return {
        type: actionTypes.ADD_LAT,
        payload,
    };
};

export const addLang = (payload) => {
    return {
        type: actionTypes.ADD_LANG,
        payload,
    };
};