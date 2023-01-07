import {useAppSelector} from "./redux-hooks";

// This func is needed to determine if the user is authorized
export function useAuth() {
    const {email, token, id} = useAppSelector(state => state.user);

    return {
        isAuth: !!email,        //authorized user has a email
        email,
        token,
        id,
    }
}