export const FAV_IMAGE = 'fav-image';

export const printHelloWorld=()=>{
    console.log("Hello action..");
    //you may perform api requests here..
    return {type:FAV_IMAGE};
}