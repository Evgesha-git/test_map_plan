import { TypedUseSelectorHook, useSelector} from "react-redux";
import { RootState } from "../../store/reducers";

export const usersTypeSelector: TypedUseSelectorHook<RootState> = useSelector