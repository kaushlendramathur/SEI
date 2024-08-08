import newsApiCall from "./newAPICall";
import { registerUserURL } from "@/constants/url";
import { RegisterType } from "@/types/auth/register";

export const registerUser = async (data : RegisterType) => {
    return await newsApiCall(registerUserURL, data);
}
