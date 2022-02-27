import firebase from "./firebaseConfig";

const auth = firebase.auth();

const signUpUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

const loginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

const logoutUser = () => {
    return auth.signOut();
};

const sendPasswordResetEmail = (email) => {
    return auth.sendPasswordResetEmail();
};

const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
};

const subscribeToAuthChanges = (handleAuthChange) => {
    auth.onAuthStateChanged((user) => {
        handleAuthChange(user);
    });
};

const fireBaseAuthService = {
    signUpUser,
    loginUser,
    logoutUser,
    sendPasswordResetEmail,
    loginWithGoogle,
    subscribeToAuthChanges,
};

export default fireBaseAuthService;
