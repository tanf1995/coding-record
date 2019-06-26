import { createStore } from 'redux';


// state
const todo_list_state = [
    "eat",
    "sleep"
]

// reducer
const todo_list_reducer = (state, action) => {
    state = state || todo_list_state;

    switch(action.type){
        case "ADD_TODO":
           return state.concat(action.payload);
        case "DELETE_TODO":
            return state.filter( (item, index) => index !== action.payload.index )
        default:
            return state;
    }
}

// store
const store = createStore(todo_list_reducer);

export default store;