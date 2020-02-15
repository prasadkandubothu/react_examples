import { BUY_CAKE } from './actions-cake';

const initialState = {
    numOfCakes : 10
}


export const cakeReduer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
            break;
    
        default: return state
            break;
    }
}