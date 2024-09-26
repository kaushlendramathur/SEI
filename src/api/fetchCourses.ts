import { coursesURL } from "@/constants/url";
import newsApiCall from "./newAPICall";

export const fetchCourses = async (location: string) => {
    return await newsApiCall(coursesURL, {institutetype : Number(location)});
}