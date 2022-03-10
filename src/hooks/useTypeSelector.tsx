import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../store/rootReducer";

export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector