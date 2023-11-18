import { GenUserData } from "./userType";

export interface EntryType {
  text: string;
  id: string;
  user_id: string;
  title: string;
  body: string;
  author: string;
  type: string;
  teaching_points: string[];
  stroke: string;
  stage: string[]
  status: string;
  created_on: Date; 
  updated_on?: Date; 
}

export interface SignUpType {
  email: GenUserData['email'];
  name: GenUserData['name'];
  password: GenUserData['password'];
  repeatPassword: GenUserData['repeatPassword'];
}

export interface SignInType {
  email: GenUserData['email'];
  password: GenUserData['password'];
}

export interface PasswordResetType {
  email: GenUserData['email'];
  // recommend adding userID to this option
}

export interface EmailResendType {
  userId: GenUserData['userID']
}

