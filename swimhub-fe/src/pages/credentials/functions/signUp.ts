import { SignUpType } from "../../../lib/types";
import { SignUpApiErrorType } from "../../../lib/types";

const signUp = async ({
  username,
  email,
  password,
  repeat_password,
}: SignUpType): Promise<Response | SignUpApiErrorType> => {
  try {
    const response = await fetch(
      "https://swimhub-production.up.railway.app/auth/signup",
      {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          repeatPassword: repeat_password,
        }),
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
    const errorMessage = "An error occurred";
    const errorResponse: SignUpApiErrorType = {
      code: (error as SignUpApiErrorType).code || 500,
      message: (error as SignUpApiErrorType).message || errorMessage,
      params: (error as SignUpApiErrorType).params || [],
    };
    return errorResponse;
  }
};

export default signUp;
