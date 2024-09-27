import { careerURL } from "@/constants/url";
import { newsAuthApiCall } from "./newAuthAPICall";

export const postCareer = async (data: any) => {
    try {
        const response = await newsAuthApiCall(careerURL, data);
        return response;
    } catch (error) {
        console.log("Error: ", error);
        return null;
    }
}
