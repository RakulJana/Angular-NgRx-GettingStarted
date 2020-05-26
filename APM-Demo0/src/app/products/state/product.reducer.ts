import {Product} from '../product'; // interface fro product slice of state
import * as fromRoot from 'state/app.state'

export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[]; //Array of products
} // now it makes sure that the store, is set on this strong typed interface

export function reducer(state: ProductState, action): ProductState { // now we specify the state and alsot he return type 
    switch(action.type) {
        case 'TOGGLE_PRODUCT_CODE':
           // console.log('existing state: ' + JSON.stringify(state));
            //console.log('payload: ' + action.payload)
            return {
                ...state, // spreads existing state
                showProductCode: action.payload // sets to new payload value
            }
        default: 
            return state;
    }
}