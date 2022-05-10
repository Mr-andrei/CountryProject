import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {allActionType, reducerGetCountry} from "../reducers/reducerGetCountry";

const rootReducer = combineReducers({
    countries: reducerGetCountry,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>
export type ThunkAPPType =  ThunkAction<void, AppRootStateType, unknown, allActionType>

//@ts-ignore
window.store = store;