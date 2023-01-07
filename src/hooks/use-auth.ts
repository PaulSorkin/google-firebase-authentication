import {useSelector} from "react-redux";

// This func is needed to determine if the user is authorized
export function useAuth() {
    const {email, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,        //authorized user has a email
        email,
        token,
        id,
    }
}