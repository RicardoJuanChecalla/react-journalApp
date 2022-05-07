import { types } from '../types/types';

// {
//     uid: assdada6464646s4d
//     name: ricardo
// }

                // ...action.payload
                // // logged: true

                // logged: false
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return {}    
        default:
            return state;
    }
}
