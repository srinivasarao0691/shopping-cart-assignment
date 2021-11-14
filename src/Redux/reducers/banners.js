import { actions } from '../actionTypes';
const initialState = {
    banners: [],
}
export default function bannersReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_BANNERS:
            return {
                ...state,
                banners: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}