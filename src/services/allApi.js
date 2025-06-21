
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"




export const registerApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,'')
}

export const loginApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

export const addEventApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/add-event`,reqBody,reqHeader)
 }

 export const allEventApi=async()=>{
    return await commonApi('GET',`${serverUrl}/get-event`,"","")
 }
 export const getAEventApi=async(id)=>{
    return await commonApi('GET',`${serverUrl}/view/${id}`,"","")
 }
 export const profileUpdateApi=async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/update-profile`,reqBody,reqHeader)
 }

 export const allProfileApi=async()=>{
    return await commonApi('GET',`${serverUrl}/get-profile`,"","")
 }

 export const bookingApi=async(reqBody,reqHeader)=>{
   return await commonApi('POST',`${serverUrl}/book`,reqBody,reqHeader)
}



export const allBookingApi=async(reqHeader)=>{
   return await commonApi('GET',`${serverUrl}/get-booking`,"",reqHeader)
}
export const latestEventApi=async()=>{
   return await commonApi('GET',`${serverUrl}/get-latestevents`,"","")
}

export const musicEventApi=async()=>{
   return await commonApi('GET',`${serverUrl}/get-musicevents`,"","")
}


export const allEventSearchApi = async(searchKey)=>{

   //syntax  url?key=value
   return await commonApi('GET',`${serverUrl}/all-eventsearch?search=${searchKey}`,"","")
}





//  export const allProjectApi = async(searchKey)=>{

//    //syntax  url?key=value
//    return await commonApi('GET',`${serverUrl}/all-project?search=${searchKey}`,"","")
// }

 