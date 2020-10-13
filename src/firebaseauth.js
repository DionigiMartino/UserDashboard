import firebase from './Firebase';
import 'firebase';

export const authMethod = {
    signIn: (email, password, setErrors, setToken) => {
        // auth on Firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( async res => {
            const token = await Object.entries(res.user)[5][1].b
            await localStorage.setItem('token', token)
            setToken(window.localStorage.token)
            console.log(res)
        })
        .catch(err => {
            setErrors(prev => ([...prev, err.message]))
        })
    },
    signOut: (email, password) => {

    }
}