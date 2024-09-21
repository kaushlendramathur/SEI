import newsApiCall from "./newAPICall";
import { LatestNewsURL } from "@/constants/url";

export const fetchAllNews = async () =>{
    return await newsApiCall(LatestNewsURL, {});
}