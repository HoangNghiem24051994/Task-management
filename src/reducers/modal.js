import * as TypeModal from '../constans/modal'

let initialState = {
    showModal: false,
    title: '',
    component: null
};

const modalReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case TypeModal.SHOW_MODAL:
            return {
                ...state,
                showModal: true
            };
        case TypeModal.HIDE_MODAL:
            return {
                ...state,
                showModal: false
            };
        case TypeModal.CHANGE_MODAL_TITLE:
            let {title} = action.payload;
            return {
                ...state,
                title: title
            };
        case TypeModal.CHANGE_MODAL_CONTENT:
            let { component} = action.payload;
            return {
                ...state,
                component: component
            };
    
        default:
            return {
                ...state
            };
    }
}
export default modalReducer;