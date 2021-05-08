export const signinAction = (userDetails) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        // async work
        getFirebase().auth().signInWithEmailAndPassword(userDetails.id, userDetails.pw).then( async (obj) =>{
            console.log("user signed in !!");
            console.log(obj.user.uid);
            getFirestore().collection("user").doc(obj.user.uid).get().then(obj2 => {
                let {
                    contactDetails, 
                    educationDetails,
                    experienceDetails
                } = obj2.data();
                console.log(contactDetails, educationDetails, experienceDetails);
                dispatch({ type: "LOGIN_USER", uid: obj.user.uid, contactDetails: contactDetails, educationDetails: educationDetails, experienceDetails: experienceDetails});
            });
        }).catch(error => {
            console.log("error", error.message);
            let msg = error.message;
            alert(`LOGIN FAILED !! ${msg}`);
        })

    }
}