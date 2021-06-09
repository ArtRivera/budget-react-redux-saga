import { types } from "../actions/ui.actions";

const modalState = {
    isModalOpen: false,
    id: null
}

export const modalReducer = (state = modalState, action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            return {
                isModalOpen: true,
                id: action.payload
            }
        case types.CLOSE_MODAL:
            return {
                id: null,
                isModalOpen: false
            }

        default:
            return state;
    }
}