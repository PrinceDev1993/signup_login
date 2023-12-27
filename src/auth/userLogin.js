import { projectAuth } from "../firebase/config";

//This will handle all the errors
let error = null;

//This is a network call / request
const login = async(email, password) => {
    error = null;

    try {
        //this is going to hold everything that will be sent by firebase
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error = null;
        console.log(res.user)
        return res

    } catch (err) {
        error = err.message;
        console.log(error)
    }
}

const userLogin = () => {
    return {error, login}
}

export default userLogin