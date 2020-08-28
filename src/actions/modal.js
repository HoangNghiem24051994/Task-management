import * as TypeModal from '../constans/modal';

export const actShowModal = () => ({
    type: TypeModal.SHOW_MODAL
})
export const actHideModal = () => ({
    type: TypeModal.HIDE_MODAL
})
export const actChangeModalContent = (component) => ({
    type: TypeModal.CHANGE_MODAL_CONTENT,
    payload: {
        component
    }
})
export const actChangeModalTitle = (title) => ({
    type: TypeModal.CHANGE_MODAL_TITLE,
    payload: {
        title
    }
})