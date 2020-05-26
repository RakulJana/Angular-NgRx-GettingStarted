export function reducer(state,action) {
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