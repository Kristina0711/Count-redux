import { CREATE_COUNT } from './actions';

const defaultStore = {
    counter: 0,
}

const reducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "CREATE_COUNT":
            return {...state, counter: ++CREATE_COUNT.payload}

            default: 
                return state;
    }
}
export default reducer;