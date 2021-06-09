export const types = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL'
}

export const openModal = id => ({ type: types.OPEN_MODAL, payload: id });

export const closeModal = () => ({ type: types.CLOSE_MODAL });