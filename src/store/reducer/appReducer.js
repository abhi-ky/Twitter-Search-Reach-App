import * as actionType from '../actions'



const initialState = {
    USER_VAL : ''
}

const reducer = ( state = initialState, action ) =>{  

    switch( action.type ){
        case actionType.GET_SEARCH_VAL:
            // console.log('GET_SEARCH_VAL from reducer')
            // console.log(state)
            return {...state}
            // return {
            //     ...state,
            //     // SEARCH_VAL : action.data
            // }
        case actionType.SET_SEARCH_VAL:
            // console.log('SEARCH_VAL SET IN STORE =>', action.data)
            return {
                ...state,
                SEARCH_VAL : action.data
            }
        case actionType.SET_USER_VAL:
            // console.log('USER_VAL SET IN STORE =>', action.data);
            return{
                ...state,
                USER_VAL : action.data
            }
    }
    return state

}

export default reducer;