import { setAllCoursesByCartURL } from "@/constants/url";
import { newsAuthApiCall } from "./newAuthAPICall";
import {getToken} from "@/utils/authStore";

export const setAllCoursesByCart = async (data: any) => {
    const token = await getToken();
    return await newsAuthApiCall(setAllCoursesByCartURL, {...data, authkey: token});
}