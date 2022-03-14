import actionTypes from "./actionTypes";

const initialData = {
    location: 0,
    startDate: 0,
    endDate: 0,
    adults: 0,
    childrens: 0,
    infants: 0,
    pets: 0,
};

export default function reducerFunction(store = initialData, action) {
    console.log("inside the reducer");
    switch (action.type) {
        case actionTypes.ADD_LOCATION:
            return {...store, location: action.payload };
        case actionTypes.ADD_START_DATE:
            return {...store, startDate: action.payload };
        case actionTypes.ADD_END_DATE:
            return {...store, endDate: action.payload };
        case actionTypes.ADD_ADULTS:
            return {...store, adults: store.adults + action.payload };
        case actionTypes.ADD_CHILDREN:
            return {...store, childrens: store.childrens + action.payload };
        case actionTypes.ADD_INFANTS:
            return {...store, infants: store.infants + action.payload };
        case actionTypes.ADD_PETS:
            return {...store, pets: store.pets + action.payload };
        default:
            return store;
    }
}