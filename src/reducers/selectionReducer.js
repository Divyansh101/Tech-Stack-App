export default (state = null, action) => {      // state can never be undefined or else we will get an error, thus in the statrting 
                                                // we need to add null cos otherwise when we run the app, the state will be underfined
    switch(action.type){
        case 'select_library': 
            return action.payload
        default: 
            return state
    }
    return null;
};