import newsApiCall from "./newAPICall";
import { loginUserURL } from "@/constants/url";

export const loginUser = async (username: string, password: string) => {
    return await newsApiCall(loginUserURL, { username, password });
}
