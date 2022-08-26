import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UsersActionCreater from "../../store/action-creaters/users";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UsersActionCreater, dispatch);
}