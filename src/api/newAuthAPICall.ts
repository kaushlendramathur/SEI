import { refreshToken } from "@/utils/refreshToken";
import newsApiCall from "./newAPICall";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const newsAuthApiCall = async (endpoints: string, body: object) => {
    try {
        const response = await fetch(endpoints,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: myHeaders
         }
        );
        if (!response.ok) {
            const token  = await refreshToken();
            return newsApiCall(endpoints, {...body, authToken: token})
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
