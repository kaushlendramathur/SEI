export interface CourseScheduleDetail {
  ID: number;
  CourseID: number;
  CourseDate: string; // or Date if you're parsing dates
  CourseEndDate: string; // or Date if you're parsing dates
  CourseFee: string; // consider using a number for fees
  SeatAvaiable: number;
  Reserved: number;
  isActive: boolean;
  isEarlyBirdDiscountEligible: boolean;
  isPreviousStudent: boolean;
  NormalFilledUp: number;
  ReservedFilledUp: number;
  Filled: number;
  Pending: number;
  Approved: number;
  Cancelled: number;
  ApplicationPercentage: number;
  ApprovedPercentage: number;
  Alert: boolean;
}

export interface Course {
  ID: number;
  CourseInstituteID: number;
  CourseTypeID: number;
  Name: string;
  Image: string;
  Intro: string | null;
  AboutCourse: string | null;
  DocumentsRequired: string[];
  DurationofCourse: string[] | null[];
  Eligibilty: string[];
  CourseScheduleandFee: string;
  CoursePDF: string | null;
  Code: string;
  isActive: boolean;
  isEarlyBirdDiscountEligible: boolean;
  isPreviousStudent: boolean;
  TotalSeats: number;
  CourseScheduleDetails: CourseScheduleDetail[];
}
