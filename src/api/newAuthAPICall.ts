import { refreshToken } from "@/utils/refreshToken";
import newsApiCall from "./newAPICall";
import {getToken} from "@/utils/authStore";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const newsAuthApiCall = async (endpoints: string, body: object) => {
    try {
        const token = await getToken();
        const response = await fetch(endpoints,{
            method: 'POST',
            body: JSON.stringify({...body, _authtoken: token}),
            headers: myHeaders
         }
        );
        
        if (!response.ok) {
            const token  = await refreshToken();
            return newsApiCall(endpoints, {...body, _authtoken: token})
        }
        const data = await response.json()
        return data;
    } catch (err) {
        console.error(err);
    }
};
