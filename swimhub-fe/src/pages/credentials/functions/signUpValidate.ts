import validator from "validator";
import { SignUpType } from "../../../lib/types";

export const signUpValidate = ({
  email,
  password,
  repeat_password,
}: SignUpType): { error: boolean; message: string } => {

  // add validate username
  
  if (!validator.isEmail(email)) {
    return { error: true, message: "Invalid email" };
  }

  if (!validator.isStrongPassword(password)) {
    return {
      error: true,
      message:
        "Password needs to be minimum 8 characters long, contain atleast 1 lower case letter, contain atleast 1 uppercase letter, contain atleast 1 number and contain atleast 1 symbol.",
    };
  }

  if (password !== repeat_password) {
    return { error: true, message: "Your passwords do not match" };
  }

  return { error: false, message: "" };
};

export default signUpValidate;
