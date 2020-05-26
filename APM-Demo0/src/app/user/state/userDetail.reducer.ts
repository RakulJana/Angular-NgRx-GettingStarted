export function reducer(state,action) {
    switch (action.type){
        case 'MASKED_LOGIN':
            return {
                ...state,
                showMaskedLogin: action.payload
            }
        default:
            return state
    }
    
}