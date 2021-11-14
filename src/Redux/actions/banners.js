import { actions } from '../actionTypes';
import { api } from '../../Helpers/axiosInstance';

export const fetchBanners = () => {
    return async (dispatch) => {
        try {
            const result = await api.get('/banners');
            console.log(result);
            result && dispatch({
                type: actions.GET_BANNERS,
                payload: result.data,
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}