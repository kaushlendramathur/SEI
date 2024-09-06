import { myCoursesFormsURL } from "@/constants/url";
import { newsAuthApiCall } from "./newAuthAPICall";
export const fetchForms = async () => {
    return await newsAuthApiCall(myCoursesFormsURL, { });
}