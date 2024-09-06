import { myCoursesFormDetailURLS } from "@/constants/url";
import { newsAuthApiCall } from "./newAuthAPICall";

export const fetchFormDetails = async (formID: number) => {
    return await newsAuthApiCall(myCoursesFormDetailURLS, { formID });
}