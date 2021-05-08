import {initialState} from "../initialState";

export const myReducer = (state = initialState , action) => {
    if(action.type === "UPDATE_CONTACT"){
        return{
            ...state,
            contactDetails: {...action.contactDetails}
        }
    }
    else if(action.type === "UPDATE_EDUCATION"){
        return{
            ...state,
            educationDetails: {...action.educationDetails}
        }
    }
    else if(action.type === "UPDATE_EXPERIENCE"){
        console.log("inside update experience reducer", ...state.experienceDetails)
        console.log("inside update experience reducer 2 ", action.experienceDetails)
        return {
            ...state,
            experienceDetails: [...state.experienceDetails, action.experienceDetails]
        }
    }
    else if(action.type === "LOGIN_USER"){
        console.log(action.contactDetails);
        console.log(action.educationDetails);
        console.log(action.experienceDetails);
        
        return{
            ...state,
            auth: {
                ...state.auth,
                uid: action.uid,
                auth: true
            },
            contactDetails: action.contactDetails,
            educationDetails: action.educationDetails,
            experienceDetails: action.experienceDetails
        }
    }
    else if(action.type === "LOGOUT"){
        return {
            ...state,
            auth: {
                ...state.auth,
                auth: false,
                uid: null
            }
        }
    }
    else if(action.type === "SIGNUP_USER"){
        return {
            ...state,
            auth:{
                ...state.auth,
                auth: true,
                uid: action.uid,
            },
            contactDetails: {
                ...state.contactDetails,
                fname: action.userInfo.fname,
                lname: action.userInfo.lname,
                email: action.userInfo.email
            }
        }
    }
    else if(action.type === "CHANGE_SKIN"){
        return {
            ...state,
            document:{
                skinCode: action.skinCode
            }
        }
    }
    return state;
}