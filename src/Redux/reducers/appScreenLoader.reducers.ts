const defaultState = {
    isLoading: false
};

let counter = 0;
const appScreenLoader = (state = defaultState, action) => {
    switch (action.type) {
        case "TOGGLE_APP_LOADING":
            counter = Math.max(0, Boolean(action.isLoading) ? counter + 1 : counter -1);
            return {...state, isLoading: Boolean(counter)}
        case "RESET_APP_LOADING":
            counter = 0
            return {...state, isLoading: false}
        default:
            return state
    }
}

export default appScreenLoader;