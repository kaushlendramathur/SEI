import newsApiCall from "./newAPICall"
import { facultyMembersURL, staffMembersURL } from "@/constants/url";

export const fetchFacultyMembers = async () =>{
    return await newsApiCall(facultyMembersURL, {});
}

export const fetchStaffMembers = async () =>{
    return await newsApiCall(staffMembersURL, {});
}
