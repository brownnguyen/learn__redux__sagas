import { Types } from '../actions/users';
const INITIAL_STATE = {
    item: []
};
export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_USER_SUCCESS: {
            return { ...state }
        }
        default:
            return { ...state }
    }
}