import { reducer } from './reducer';

import { createContext, useReducer } from "react";

export const shopContext = createContext();

const initialState = {
    goods: [],
    isLoading: true,
    order: [],
    isShowBasket: false,
}

export function ContextProvider({ children }) {
    const [ value, dispatch ] = useReducer(
        reducer, initialState
    );

    value.addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET", payload: item});
    }

    value.incrementQuantity = (itemId) => {
        dispatch({type: "INCREMENT_QUANTITY", payload: itemId});
    }

    value.decrementQuantity = (itemId) => {
        dispatch({type: "DECREMENT_QUANTITY", payload: itemId})
    }
    
    value.removeFromBasket = (itemId) => {
        dispatch({type: "REMOVE_FROM_BASKET", payload: {
            id: itemId
        }})
    }
    
    value.showBasket = () => {
        dispatch({type: "SHOW_BASKET"})
    }

    value.setGoods = (data) => {
        dispatch({type: "SET_GOODS", payload: data})
    }

    return (
        <shopContext.Provider value={ value }>
            { children }
        </shopContext.Provider>
    )
}

