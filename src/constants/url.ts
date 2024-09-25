export const apiBaseURL = process.env.EXPO_PUBLIC_API_URL? process.env.EXPO_PUBLIC_API_URL: "https://www.seiedutrust.com"

export const facultyMembersURL = `${apiBaseURL}/Home/GetAllFacultyMembers/`

export const staffMembersURL = `${apiBaseURL}/Home/GetAllFacultyStaffMembers/`

export const loginUserURL = `${apiBaseURL}/Login/LogonFromDevice/`

export const registerUserURL = `${apiBaseURL}/Login/StudentRegister/`

export const LatestNewsURL = `${apiBaseURL}/Home/GetAllLatestNews/`

export const myCoursesFormsURL = `${apiBaseURL}/Home/getFormDetailsStudentByDevice/`

export const myCoursesFormDetailURLS = `${apiBaseURL}/Home/ShowAdmissionFormDetailsByDevice/`

export const contactURL = `${apiBaseURL}/Home/SendContactInfo/`

export const coursesURL = `${apiBaseURL}/Home/GetAllCourseDetail/`

export const setAllCoursesByCartURL = `${apiBaseURL}/Home/setAllCourseForCartByDevice/`
