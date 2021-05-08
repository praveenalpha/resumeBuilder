export const documentAction = (skinCode) => {
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        console.log("inside documetnAction ", skinCode)
        dispatch({type: "CHANGE_SKIN", skinCode: skinCode});
    }
}