// types/myCourses/formDetails.ts

export interface Course {
    CourseID: number;
    CourseType: number;
    CourseInstituteID: number;
    PrincipalName: string;
    VicePrincipalName: string | null;
    CourseFee: number;
    Name: string;
    Code: string;
    Date: string;
    DateShow: string;
    Eligibilty: string;
    CertificateLink: string;
    CertificateNoPrefix: string;
    EndDate: string;
    Status: number;
  }
  
  export interface FormDetails {
    ID: number;
    Image: string;
    Surname: string;
    OtherNames: string;
    DateofApplication: string;
    DateofApplicationshow: string;
    RankDesignations: string;
    InDoSNo: string;
    CDCNo: string;
    CDCDateofIssue: string;
    CDCDateofIssueshow: string;
    CDCValid: boolean;
    PassportNo: string;
    PassportDateofIssue: string;
    PassportDateofIssueshow: string;
    PassportValid: boolean;
    CertOfCompletency: string;
    COCNo: string;
    COCNoValid: boolean;
    DateofBirth: string;
    DateofBirthshow: string;
    Nationality: string;
    Employer: string | null;
    PermanentAddress: string;
    PresentAddress: string;
    Email: string;
    PhoneNumber: string;
    BloodGroup: string;
    Allergic: boolean;
    AllergicDetails: boolean | null;
    Nextofkin: string | null;
    Relationtoself: string | null;
    EmergencyPhoneNumber: string;
    NoofCert: number | null;
    IssuedBy: string | null;
    IssuedINDosNo: string | null;
    PaymentMode: number;
    PaymentRemark: string | null;
    PaymentOnline: number;
    IsPreviousStudent: boolean;
    AcceptForm: boolean;
    IsGroupDiscount: boolean;
    IsGroupDiscountPercentage: number;
  }
  
  export interface FormData {
    ID: number;
    FormNameID: string;
    FormDetails: FormDetails | null;
    Courses: Course[];
    Status: string;
  }
  