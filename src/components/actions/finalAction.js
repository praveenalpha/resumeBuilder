export const finalAction = (contactDetails, educationDetails, experienceDetails, uid) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        getFirestore().collection("user").doc(uid).update({
            contactDetails: contactDetails,
            educationDetails: educationDetails, 
            experienceDetails: experienceDetails
        }).then(obj => {
            console.log("updated details !!")
        })
    }
}