import * as uiTypes from '../constans/ui'

let initialState = {
    showLoading: false,
    showSidebar: false
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case uiTypes.SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            };
        case uiTypes.HIDE_LOADING:
            return {
                ...state,
                showLoading: false
            };
    
        case uiTypes.SHOW_SIDEBAR:
            return {
                ...state,
                showSidebar: true
            };
        case uiTypes.HIDE_SIDEBAR:
            return {
                ...state,
                showSidebar: false
            };
    
        default:
            return {
                ...state
            };
    }
}
export default uiReducer;