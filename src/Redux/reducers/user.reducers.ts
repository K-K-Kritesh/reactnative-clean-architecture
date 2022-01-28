const initializeState = {
    userInfo:{},
    isLoggedIn: false,
};

let counter = 0;
const user = (state = initializeState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, userInfo: action.payload}
        case "SET_IS_USER_LOGGEDIN":
            return {...state, isLoggedIn: action.payload}
        default:
            return state
    }
}

export default user;