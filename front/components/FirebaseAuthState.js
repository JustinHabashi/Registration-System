
import React, {useEffect, useContext} from 'react'
import firebase from '../firebase'
import { Context } from '../context'

const FirebaseAuthState = ({children}) => {
    const {dispatch} = useContext(Context);

    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            if (!user) {
                dispatch({
                    type: "LOGOUT",
                });
            } else {
                // send this token to the backend so we can manage it and validate
                const {token} = await user.getIdToken();
                // every one hour firebase generates a new token
                console.log('TOKEN', token);
            }
        });
    }, []);

    return <>{children}</>
};

export default FirebaseAuthState;