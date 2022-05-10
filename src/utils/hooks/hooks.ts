import {useDispatch} from "react-redux";
import { AppRootStateType} from "../../store/store/store";
import {ThunkDispatch} from "redux-thunk";
import {allActionType} from "../../store/reducers/reducerGetCountry";


export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, allActionType>>()