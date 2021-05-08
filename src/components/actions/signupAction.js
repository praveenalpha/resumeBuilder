export const signupAction = (userInfo) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        let {
            fname,
            lname,
            email,
            pw
        } = userInfo;
        console.log("userInfo ", fname, lname, email, pw);
        getFirebase().auth().createUserWithEmailAndPassword(email, pw).then( obj => {
            console.log("created user ", obj.user);
            getFirestore().collection("user").doc(obj.user.uid).set({
                contactDetails: {
                    fname: fname,
                     lname: lname,
                     pSummary: "",
                     email: email,
                     phone: "",
                     hNo:"",
                     street: "",
                     city: "",
                     pin: "",
                     state: "",
                     country: ""
                 },
                 educationDetails:{
                   cCity: "",
                   cName: "",
                   cCountry: "",
                   degree: "",
                   yop: "",
                   one: [],
                   two: [],
                   three: []
                 },
                 experienceDetails: []
            }).then( obj2 =>{
                console.log("userDetails added to firestore !!!!");
                dispatch({type: "SIGNUP_USER", userInfo: userInfo});
            })
        })
        .catch(error => {
            console.log("error ", error);
        })
    }
}